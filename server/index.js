import express from "express";
import postRoute from "./routes/posts.js";
import authRoute from "./routes/auths.js";
import userRoute from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true,
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/post", postRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(2000, () => {
  console.log("Server connected");
});
