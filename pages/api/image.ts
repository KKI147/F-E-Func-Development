import express from "express";
import multer from "multer";
import nextConnect from "next-connect";
import path from "path";

console.log("업로드 테스트");

// const app = nextConnect({
//   onError(error, req, res: any) {
//     res
//       .status(501)
//       .json({ error: `Sorry something Happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });
const app = express();

// app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

console.log(__dirname);

// console.log(express.static(path.join(__dirname, "./uploads")));
// app.use(express.static("/image"));
app.use("uploads", express.static(path.join(__dirname, "image")));

// const test = path.resolve(__dirname, "/uploads");

// console.log(app);

console.log("33");

export default app;
