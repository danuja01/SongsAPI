import Song from "../models/song";

export const getSongs = async (req, res) => {
  await Song.paginate(
    {},
    {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      sort: { createdAt: -1 },
      lean: true,
    }
  )
    .then((data) =>
      res
        .status(200)
        .json({ data: data.docs, message: "Songs retrived successfully" })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
};

export const createSong = async (req, res) => {
  await Song.create(req.body)
    .then((song) =>
      res.status(201).json({ data: song, message: "Song created successfully" })
    )
    .catch((err) => res.status(400).json(err.message));
};
