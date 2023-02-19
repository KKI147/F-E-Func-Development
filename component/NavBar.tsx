import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
  return (
    <Layout>
      <Wrapper>
        <Btn>
          <Link href="/join">
            <div>Join</div>
          </Link>
        </Btn>
        <Btn>
          <Link href="login">
            <div>Login</div>
          </Link>
        </Btn>
        <Btn>
          <Link href="/file-upload">
            <div>File Upload</div>
          </Link>
        </Btn>
        <Btn>
          <Link href="/file-download">
            <div>File Download</div>
          </Link>
        </Btn>
        <Btn>
          <Link href="/editor">
            <div>Editor</div>
          </Link>
        </Btn>
        <Btn>
          <Link href="/mail-send">
            <div>Mail Send</div>
          </Link>
        </Btn>
        <Btn>
          <Link href="/calendar">
            <div>Calendar</div>
          </Link>
        </Btn>
        <Btn>
          <Link href="/kakao-map-api">
            <div>Kakao Map API</div>
          </Link>
        </Btn>
        <Btn>
          <Link href="/real-time-soket">
            <div>Real Time Socket Connect</div>
          </Link>
        </Btn>
        <Btn>
          <Link href="/loading-component">
            <div>Loading Component</div>
          </Link>
        </Btn>
      </Wrapper>
      <Copyright>© Copyright 2023. Made by Kim kyeong il</Copyright>
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  width: calc(30% - 15px);
  margin-right: 15px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  font-size: 22px;
  color: #9a9a9a;
`;

const Btn = styled.div`
  width: 100%;
  height: 36px;
  padding: 15px 30px 15px 30px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  /* box-shadow: inset 360px 0px 0px #6098ff; */
  & div {
    width: fit-content;
    height: 36px;
    padding: 15px 30px 15px 30px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    cursor: pointer;
    :hover {
      width: 50%;
      height: 36px;
      padding-right: 50px;
      color: #fff;
      padding-left: 96px;
      -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
      transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
      background-color: #6098ff;
    }
  }
`;
const Copyright = styled.div`
  padding: 20px 20px;
  font-size: 18px;
  color: #9a9a9a;
`;
