import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todosRoutes from "./routes/todosRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connect_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ppnr7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connect_url, { useNewUrlParser: true });

app.use("/todos", todosRoutes);
app.use("/auth", authRoutes);

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT_NUMBER, () => {
  console.log("server running");
});
