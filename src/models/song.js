import mongoose from "mongoose";
const mongoosePaginate = require("mongoose-paginate-v2");

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

songSchema.plugin(mongoosePaginate);

const Song = mongoose.model("Song", songSchema);

export default Song;
