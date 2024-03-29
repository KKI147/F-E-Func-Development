import styled from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";
import Image from "next/image";
import axios from "axios";
import { downloadGet } from "@/module/Api";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const FileDownload = ({ data }: any) => {
  // get server side props
  // api 2개로 분리
  // file url 던져주고
  // file url 던져주고
  // console.log(data);
  console.log(data);
  const [fileList, setFileList] = useState<object[]>();

  const [image, setImage] = useState("");

  const onClickHandler = async () => {
    // const res = await fetch("https://uploads");
    // const blob = await res.blob();
    // const downloadUrl = window.URL.createObjectURL(blob);
    const fileUrl = "/uploads";

    const {
      data: { type, arrayBuffer },
    } = await axios.get("/api/download", { params: { url: fileUrl } });

    const blob = await new Blob([Uint8Array.from(arrayBuffer)], { type });
    // <a> 태그의 href 속성값으로 들어갈 다운로드 URL
    const downloadUrl = window.URL.createObjectURL(blob);
    console.log(downloadUrl);
    setImage(downloadUrl);
  };
  console.log(image);

  return (
    <>
      <Head>
        <title>File-Download</title>
        <meta property="og:title" content="File-Download" />
        <meta name="description" content="File-Download" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>

      <Wrapper>
        <TopSection skill={[]} description={[]} status={"개발예정"} />
        <SectionContainer>
          <Image
            src={"/images/google.png"}
            width={18}
            height={18}
            alt="image"
            loading="lazy"
            style={{
              width: "20px",
              height: "20px",
            }}
          />

          <a href={image} download="다운로드 되는 파일명">
            UI에 표시되는 파일명
          </a>

          <button onClick={onClickHandler}>버튼</button>
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default FileDownload;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;

// export async function getServerSideProps() {
//   const res = fetch("http://localhost:3000/api/uploads");

//   // console.log(res);

//   // console.log(res);

//   return {
//     props: {
//       data: "",
//     },
//   };
// }

// export async function getServerSideProps() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   const { results } = await (
//     await fetch("http://localhost:3000/uploads")
//   ).json();
//   return {
//     props: { results }, // props를 통해 page에 data전달
//   };
// }
