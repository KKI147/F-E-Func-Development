import nextConnect from "next-connect";
import multer from "multer";
import { existsSync, mkdirSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";

console.log("API 호출13");

const storage: any = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath: string = "uploads";
    console.log(uploadPath);
    if (!existsSync(uploadPath)) {
      console.log("경로에 해당 폴더 가 없을 때: " + uploadPath);
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

let uploadFile = upload.single("file");

const handler = nextConnect();
handler.use(uploadFile);
handler.post(async (req: any, res: NextApiResponse<any>) => {
  console.log("req.body", req.body);
  console.log(req.file);
  let url = "http://" + req.headers.host;

  // let filename = req.file.filename;
  // console.log(filename);

  res.status(200).send({
    ok: true,
    // result: url + "/public/" + req.file.filename,
  });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
