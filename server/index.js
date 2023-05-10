import express from "express";
import postRoute from "./routes/post.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
const app = express();

app.use(express.json());

app.use("/post", postRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(2000, () => {
  console.log("Server connected");
});
