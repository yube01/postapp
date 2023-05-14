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
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0MDM4NzU4fQ.oEWQby-FD9tWr2wbISjsY-mUg1X-9tqL0IZGAX8be54";

  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    console.log(userInfo);

    const postId = req.params.id;
    console.log(postId);
    const q = "DELETE FROM post WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};

export const updatePost = (req, res) => {
  res.send("Post working");
};

export const addPost = (req, res) => {
  res.send("Post working");
};
