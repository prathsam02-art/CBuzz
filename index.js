import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT ||7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("DB Connected !!");
        
    })
    .catch ((error) => {
        console.log("Error to connect with db !!", error);
    })
app.listen(PORT , () => {
        console.log(`Server Running on Port ${PORT}`);
    });

app.get("/", (req, res) => {
    res.send("CBuzz Backend Server is Running");
});