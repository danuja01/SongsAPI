require("dotenv").config();
import express from "express";
import cors from "cors";
import { configDB } from "./config";
import songsRoutes from "./routes/songs.route";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/songs", songsRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

configDB();

app.listen(process.env.PORT || 4000, () => {
  console.log("Server on port 3000");
});
