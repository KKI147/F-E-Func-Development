import nextConnect from "next-connect";
import multer from "multer";
import path from "path";
import dayjs from "dayjs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const nowDate = dayjs(Date.now()).format("YYMMDDHHMM");
    cb(null, `${nowDate}_${file.originalname}`);
  },
  // fileFilter: function (req: any, file: any, callback: any) {
  //   const ext = path.extname(file.originalname);
  //   if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
  //     return callback(new Error("PNG, JPG만 업로드하세요"));
  //   }
  //   callback(null, true);
  // },
  //   fileFilter = (req, file, cb) => {
  //     const typeArray = file.mimetype.split('/');
  //     const fileType = typeArray[1];

  //     if (fileType == 'jpg' || fileType == 'png' || fileType == 'jpeg' || fileType == 'gif' || fileType == 'webp') {
  //         req.fileValidationError = null;
  //         cb(null, true);
  //     } else {
  //         req.fileValidationError = "jpg,jpeg,png,gif,webp 파일만 업로드 가능합니다.";
  //         cb(null, false)
  //     }
  // }
  //   limits: {
  //     fileSize: 1024 * 1024,
  //   },
});

const fileFilter = (req: any, file: any, cb: any) => {
  const typeArray = file.mimetype.split("/");
  const fileType = typeArray[1];

  if (
    fileType == "jpg" ||
    fileType == "png" ||
    fileType == "jpeg" ||
    fileType == "gif" ||
    fileType == "webp"
  ) {
    req.fileValidationError = "등록 완료";
    cb(null, true);
  } else {
    req.fileValidationError = "jpg,jpeg,png,gif,webp 파일만 업로드 가능합니다.";
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, //크기 제한 : 10MB
  },
});

const app = nextConnect({
  onError(error, req, res: any) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
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