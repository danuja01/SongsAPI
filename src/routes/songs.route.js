import express from "express";

const router = express.Router();

import { getSongs, createSong } from "../controllers/songs";

router.get("/", getSongs);
router.post("/", createSong);

export default router;
