import { db } from "../connect.js";
import jwt from "jsonwebtoken";

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
  const q =
    "SELECT `username`,`title`,`desc`,p.img,u.img AS userImg,`cat`,`date` FROM users u JOIN post p ON u.id = p.uid WHERE p.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data[0]);
  });
};

export const deletePost = (req, res) => {
  const token = res.cookie.access_token;
  if (!token) return res.status(404).json("access denied");

  jwt.verify(token, "access_token", (err, userInfo) => {
    if (err) return res.status(403).json("Token not valid");

    const postId = re.params.id;
    const q = "DELETE FROM post WHERE `id` =? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can't delete this post");
      return res.status(200).json("post deleted successfully");
    });
  });
};

export const updatePost = (req, res) => {
  res.send("Post working");
};

export const addPost = (req, res) => {
  res.send("Post working");
};
