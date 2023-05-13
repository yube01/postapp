import { db } from "../connect.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM post WHERE cat= ?"
    : "SELECT * FROM post";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  res.send("Post working");
};

export const deletePost = (req, res) => {
  res.send("Post working");
};

export const updatePost = (req, res) => {
  res.send("Post working");
};

export const addPost = (req, res) => {
  res.send("Post working");
};
