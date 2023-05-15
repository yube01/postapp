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
    "SELECT p.id, `username`,`title`,`desc`,p.img,u.img AS userImg,`cat`,`date` FROM users u JOIN post p ON u.id = p.uid WHERE p.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data[0]);
  });
};

export const deletePost = (req, res) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0MDQwMDgxfQ.4ITU3XSVqBH3PWKDiVtGXG_n2-SmRnyU-91gpSvCd1Q";

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
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0MDQwMDgxfQ.4ITU3XSVqBH3PWKDiVtGXG_n2-SmRnyU-91gpSvCd1Q";

  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;

    const q =
      "UPDATE INTO SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` =? AND `uid`=?";

    const value = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,

      userInfo.id,
    ];

    db.query(q, [...value, postId, userInfo], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Post has been updated");
    });
  });
};

export const addPost = (req, res) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0MDQwMDgxfQ.4ITU3XSVqBH3PWKDiVtGXG_n2-SmRnyU-91gpSvCd1Q";

  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO post (`title`,`desc`,`img`,`cat`,`date`,`uid`) VALUES (?)";

    const value = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [value], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Post has been created");
    });
  });
};
