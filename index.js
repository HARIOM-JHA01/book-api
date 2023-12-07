import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/BookRoutes.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use("/books", bookRoutes);
mongoose.connect(process.env.DATABASE_URL).then(
    () => {
        console.log("DB connected");
    },
    (err) => {
        console.error("err");
    }
);
mongoose.connection.on("error", (err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world" });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is up on port ${process.env.PORT}`);
});
