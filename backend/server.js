import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import storyRoutes from "./routes/story.js";

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

mongoose
  .connect("mongodb+srv://riya:LPJiRsG2ynFiZVdw@cluster0.xxuusor.mongodb.net/storyscape")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// 🔥 THIS LINE IS KEY
app.use("/api/story", storyRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});

