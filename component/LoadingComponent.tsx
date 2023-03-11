import styled from "styled-components";
import { useState } from "react";

export default function LoadingComponent() {
  const [open, setOpen] = useState<boolean>(false);

  const onClickHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      {open === false ? (
        <>
          <BtnBox>
            <Btn onClick={onClickHandler}>열기</Btn>
          </BtnBox>
          <Content></Content>
        </>
      ) : (
        <>
          <BtnBox>
            <Btn onClick={onClickHandler}>닫기</Btn>
          </BtnBox>
          <Content>...로딩중</Content>
          <Spinner></Spinner>
        </>
      )}
    </>
  );
}
const BtnBox = styled.div`
  position: relative;
  width: 40%;
  margin: 20px auto;
`;

const Btn = styled.button`
  position: relative;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #379fff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  cursor: pointer;
`;

const Content = styled.div`
  text-align: center;
  margin: 50px auto 0;
  font-size: 25px;
`;
const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 160px;
  border: 24px solid rgba(255, 165, 0, 0.4);
  border-top: 24px solid rgba(255, 165, 0, 1);
  border-radius: 50%;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
