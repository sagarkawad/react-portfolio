"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'express' module
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config(); // Load .env file
// 2. Create a Schema corresponding to the document interface.
const peopleSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});
// 3. Create a Model.
const People = (0, mongoose_1.model)('People', peopleSchema);
function run(name, email, message, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 4. Connect to MongoDB
            yield (0, mongoose_1.connect)(process.env.DATABASE_URL);
            const user = new People({
                name: name,
                email: email,
                message: message,
            });
            yield user.save();
            console.log(user.email); // 'bill@initech.com'
            res.send("successfuly created user message");
        }
        catch (e) {
            console.log("error - ", e);
            res.status(400).send(`error - ${e}`);
        }
    });
}
// Create an Express application
const app = (0, express_1.default)();
//cors
app.use((0, cors_1.default)());
// Add middleware to parse JSON request bodies
app.use(express_1.default.json());
// Set the port number for the server
const port = process.env.PORT || 3000;
// Define a route for the root path ('/')
app.get('/', (req, res) => {
    // Send a response to the client
    res.send('Hello, TypeScript + Node.js + Express!');
});
app.post("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("here");
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        res.status(400).json({ message: 'Name, Email and Message are required' });
    }
    yield run(name, email, message, res);
}));
// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});
