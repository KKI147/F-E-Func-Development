import { NextApiRequest, NextApiResponse } from "next";

export interface FileResponse {
  type: string;
  arrayBuffer: number[];
}
console.log(1);

export default async function file(
  req: NextApiRequest,
  res: NextApiResponse<FileResponse>
) {
  const { url } = req.query;

  console.log(url);

  // 파일 경로에 요청
  // const rawData = await fetch(url as string);

  // const blob = await rawData.blob();
  // console.log(2);

  // 브라우저에서 Blob 데이터를 만들기 위한 정보 응답
  // console.log(req.url);
  // res.status(200).send({
  //   type: blob.type,
  //   arrayBuffer: Object.values(new Uint8Array(await blob.arrayBuffer())),
  // });
}
