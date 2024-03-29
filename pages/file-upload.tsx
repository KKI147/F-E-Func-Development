import styled from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";
import { useState } from "react";
import Image from "next/image";
import { uploadPost } from "@/module/Api";

export const FileUpload = () => {
  const [image, setImage] = useState("");
  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file: any = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      const res: any = await uploadPost("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImage(URL.createObjectURL(e.target.files[0]));
      alert("사진이 등록되었습니다.");
    }
  };

  return (
    <>
      <Head>
        <title>File-Upload</title>
        <meta property="og:title" content="File-Upload" />
        <meta name="description" content="File-Upload" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>

      <Wrapper>
        <TopSection
          skill={["multer", "nextConnect"]}
          description={[
            "nextConnect와 multer를 활용해 local-stroage를 만든후 image를 저장합니다.",
          ]}
          status={"개발예정"}
        />
        <SectionContainer>
          <ImageBox>
            <Image
              src={image || "/next.svg"}
              alt="image"
              loading="lazy"
              width={50}
              height={50}
              style={{}}
            />

            <LabelBox htmlFor="file">사진 등록</LabelBox>

            <UseInput
              id="file"
              type="file"
              accept="image/*"
              onChange={onChangeHandler}
            />
          </ImageBox>
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default FileUpload;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;

const ImageBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ImagePreview = styled.div`
  /* display: flex; */
  /* position: relative;
  width: 100%;
  height: 80%; */
  /* margin: 0 15px; */
`;

const LabelBox = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  margin: 0 0 0 20px;
  border: 1px dashed #181818;
  cursor: pointer;
`;

const UseInput = styled.input`
  display: none;
`;
