// Import the 'express' module
import express from 'express';
import { Request, Response } from 'express';
import {Schema, model, connect} from "mongoose";
import cors from "cors";

require('dotenv').config(); // Load .env file

// 1. Create an interface representing a document in MongoDB.
interface IPeople {
    name: string;
    email: string;
    message: string;
  }

// 2. Create a Schema corresponding to the document interface.
const peopleSchema = new Schema<IPeople>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: {type: String, required: true},
  });

// 3. Create a Model.
const People = model<IPeople>('People', peopleSchema);

async function run(name: string, email: string, message: string, res: Response) {
   try {
    // 4. Connect to MongoDB
    await connect(process.env.DATABASE_URL as string);
  
    const user = new People({
      name: name,
      email: email,
      message: message,
    });
    await user.save();
  
    console.log(user.email); // 'bill@initech.com'
    res.send("successfuly created user message") 
    } catch(e) {
        console.log("error - ", e);
        res.status(400).send(`error - ${e}`) 
    }
}

// Create an Express application
const app = express();

//cors
app.use(cors())
// Add middleware to parse JSON request bodies
app.use(express.json());

// Set the port number for the server
const port = 3000;

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
  
});

app.post("/contact", async (req, res) => {
    console.log("here")
   
        const {name, email, message} = req.body;
    
        if (!name || !email || !message) {
            res.status(400).json({ message: 'Name, Email and Message are required' });
          }
    
        await run(name, email, message, res);
            
})

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
