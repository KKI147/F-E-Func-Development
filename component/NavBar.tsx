import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <Container>
      <Wrapper>
        <Lists>
          <List>
            <Link href="/join">
              {router.asPath === "/join" ? (
                <Hover>Join</Hover>
              ) : (
                <div>Join</div>
              )}
            </Link>
          </List>
          <List>
            <Link href="login">
              {router.asPath === "/login" ? (
                <Hover>Login</Hover>
              ) : (
                <div>Login</div>
              )}
            </Link>
          </List>
          <List>
            <Link href="/file-upload">
              {router.asPath === "/file-upload" ? (
                <Hover>File Upload</Hover>
              ) : (
                <div>File Upload</div>
              )}
            </Link>
          </List>
          <List>
            <Link href="/file-download">
              {router.asPath === "/file-download" ? (
                <Hover>File Download</Hover>
              ) : (
                <div>File Download</div>
              )}
            </Link>
          </List>
          <List>
            <Link href="/editor">
              {router.asPath === "/editor" ? (
                <Hover>Editor</Hover>
              ) : (
                <div>Editor</div>
              )}
            </Link>
          </List>
          <List>
            <Link href="/mail-send">
              {router.asPath === "/mail-send" ? (
                <Hover>Mail Send</Hover>
              ) : (
                <div>Mail Send</div>
              )}
            </Link>
          </List>
          <List>
            <Link href="/calendar">
              {router.asPath === "/calendar" ? (
                <Hover>Calendar</Hover>
              ) : (
                <div>Calendar</div>
              )}
            </Link>
          </List>
          <List>
            <Link href="/kakao-map-api">
              {router.asPath === "/kakao-map-api" ? (
                <Hover>Kakao Map API</Hover>
              ) : (
                <div>Kakao Map API</div>
              )}
            </Link>
          </List>
          <List>
            <Link href="/intersection-observer">
              {router.asPath === "/intersection-observer" ? (
                <Hover>Intersection observer</Hover>
              ) : (
                <div>Intersection observer</div>
              )}
            </Link>
          </List>
          <List>
            <Link href="/loading-component">
              {router.asPath === "/loading-component" ? (
                <Hover>Loading Component</Hover>
              ) : (
                <div>Loading Component</div>
              )}
            </Link>
          </List>
        </Lists>
        <Copyright>© Copyright 2023. Made by Kim kyeong il</Copyright>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: calc(30% - 15px);
  height: 100%;
  margin-right: 15px;
`;

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 22px;
  color: #9a9a9a; ;
`;
const Lists = styled.ul`
  width: 100%;
  position: relative;
`;

const Hover = styled.div`
  width: 70%;
  padding: 15px 96px 15px 40px;
  color: #fff;
  -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  background-color: #6098ff;
`;
const List = styled.li`
  width: 70%;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  & div {
    padding: 15px 15px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    cursor: pointer;
    :hover {
      width: 70%;
      /* height: 36px; */
      padding: 15px 96px 15px 40px;
      color: #fff;
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
