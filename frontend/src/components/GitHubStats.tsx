import { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";

type Stats = {
  week: number;
  month: number;
  year: number;
};

type Props = {
  username: string;
};

const githubToken = import.meta.env.VITE_GITHUB_TOKEN; // Updated to use Vite's import.meta.env

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: { Authorization: `Bearer ${githubToken}` },
});

const GITHUB_STATS_QUERY = gql`
  query ($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

// Define the expected structure of the response data
interface GitHubStatsResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: Array<{
          contributionDays: Array<{
            date: string;
            contributionCount: number;
          }>;
        }>;
      };
    };
  };
}

const GitHubStats: React.FC<Props> = ({ username }) => {
  const [stats, setStats] = useState<Stats>({ week: 0, month: 0, year: 0 });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const data = await client.request<GitHubStatsResponse>(
          GITHUB_STATS_QUERY,
          { username }
        );
        const contributions =
          data.user.contributionsCollection.contributionCalendar;
        const weeks = contributions.weeks;

        // Calculate last week contributions
        const lastWeek = weeks[weeks.length - 2].contributionDays;
        const week = lastWeek.reduce(
          (total: number, day: { contributionCount: number }) =>
            total + day.contributionCount,
          0
        );

        // Calculate last month contributions (last 4 weeks)
        const lastMonth = weeks.slice(-4).flatMap(
          (week: { contributionDays: { contributionCount: number }[] }) =>
            week.contributionDays
        );
        const month = lastMonth.reduce(
          (total: number, day: { contributionCount: number }) =>
            total + day.contributionCount,
          0
        );

        // Total contributions in the year
        const year = contributions.totalContributions;

        setStats({ week, month, year });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    fetchGitHubStats();
  }, [username]);

  return (
    <div className="p-8 lg:p-12 w-[100%] mx-auto bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-6">
        GitHub Contributions
      </h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-md"
          >
            <p className="text-lg font-medium text-gray-700 mb-2">Last Week</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.week}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-md"
          >
            <p className="text-lg font-medium text-gray-700 mb-2">Last Month</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.month}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-md"
          >
            <p className="text-lg font-medium text-gray-700 mb-2">Last Year</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.year}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GitHubStats;
