
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/Book.route.js";
import userRoute from "./route/user.route.js"
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

const port = process.env.port || 4000;
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI);
    console.log("Connected to mongoDB ")
} catch (error) {
    console.log("Error : ", error)
}

app.use(express.json());
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})