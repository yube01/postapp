import express from "express";
import postRoute from "./routes/posts.js";
import authRoute from "./routes/auths.js";
import userRoute from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/post", postRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(2000, () => {
  console.log("Server connected");
});
