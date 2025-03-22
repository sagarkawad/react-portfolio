import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if the navigation is not from browser back/forward buttons
    const isBrowserNavigation = window.history.state?.usr?.fromBrowserNavigation;
    if (!isBrowserNavigation) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
} 