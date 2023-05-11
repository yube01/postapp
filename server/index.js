import express from "express";
import postRoute from "./routes/posts.js";
import authRoute from "./routes/auths.js";
import userRoute from "./routes/users.js";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(cors());

app.use("/post", postRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(2000, () => {
  console.log("Server connected");
});
