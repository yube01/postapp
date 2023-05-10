import express from "express";
import { addPost } from "../controller/post";

const router = express.Router();

router.get("/post", addPost);

export default router;
