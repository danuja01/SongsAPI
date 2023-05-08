import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Song = mongoose.model("Song", songSchema);
export default Song;
