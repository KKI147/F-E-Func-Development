import styled from "styled-components";
import Link from "next/link";

export default function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Box>
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
              <div>Intersection observer</div>
            </Link>
          </Btn>
          <Btn>
            <Link href="/loading-component">
              <div>Loading Component</div>
            </Link>
          </Btn>
        </Box>
        <Copyright>© Copyright 2023. Made by Kim kyeong il</Copyright>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: calc(30% - 15px);
  height: 100vh;
  margin-right: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 22px;
  color: #9a9a9a; ;
`;

const Box = styled.div``;
const Btn = styled.div`
  width: 100%;

  padding: 0 15px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  & div {
    padding: 15px 15px;
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
