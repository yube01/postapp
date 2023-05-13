import express from "express";
import { addPost, deletePost, getPost, getPosts } from "../controller/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.update("/:id", deletePost);

export default router;
