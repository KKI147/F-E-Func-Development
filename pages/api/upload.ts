import nextConnect from "next-connect";
import { existsSync, mkdirSync } from "fs";
import multer from "multer";
import path from "path";
import dayjs from "dayjs";

const storage: any = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath: string = "uploads";
    console.log("파일 시스템");

    if (!existsSync(uploadPath)) {
      console.log(uploadPath);
      mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const nowDate = dayjs(Date.now()).format("YYMMDDHHMM");
    cb(null, `${nowDate}_${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

const app = nextConnect({
  onError(error, req, res: any) {
    res.status(501).json({
      error: `Sorry something Happened! ${error.message}`,
      content: error,
    });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

app.post(upload.single("file"), function (req, res, next) {
  res.status(200).json({ file: req.file });
});

export default app;

export const config = {
  api: {
    bodyParser: false,
  },
};
