import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <Lists>
          <List>
            <Link href="/join">
              {router.asPath === "/join" ? (
                <Done>Join</Done>
              ) : (
                <DoneText>Join</DoneText>
              )}
            </Link>
          </List>
          <List>
            <Link href="login">
              {router.asPath === "/login" ? (
                <Done>Login</Done>
              ) : (
                <DoneText>Login</DoneText>
              )}
            </Link>
          </List>
          <List>
            <Link href="/file-upload">
              {router.asPath === "/file-upload" ? (
                <Hover>File Upload</Hover>
              ) : (
                <Text>File Upload</Text>
              )}
            </Link>
          </List>
          <List>
            <Link href="/file-download">
              {router.asPath === "/file-download" ? (
                <Hover>File Download</Hover>
              ) : (
                <Text>File Download</Text>
              )}
            </Link>
          </List>
          <List>
            <Link href="/editor">
              {router.asPath === "/editor" ? (
                <Hover>Editor</Hover>
              ) : (
                <Text>Editor</Text>
              )}
            </Link>
          </List>
          <List>
            <Link href="/mail-send">
              {router.asPath === "/mail-send" ? (
                <Done>Mail Send</Done>
              ) : (
                <Text>Mail Send</Text>
              )}
            </Link>
          </List>
          <List>
            <Link href="/calendar">
              {router.asPath === "/calendar" ? (
                <Hover>Calendar</Hover>
              ) : (
                <Text>Calendar</Text>
              )}
            </Link>
          </List>
          <List>
            <Link href="/kakao-map-api">
              {router.asPath === "/kakao-map-api" ? (
                <Done>Kakao Map API</Done>
              ) : (
                <DoneText>Kakao Map API</DoneText>
              )}
            </Link>
          </List>
          <List>
            <Link href="/intersection-observer">
              {router.asPath === "/intersection-observer" ? (
                <Hover>Intersection observer</Hover>
              ) : (
                <Text>Intersection observer</Text>
              )}
            </Link>
          </List>
          <List>
            <Link href="/loading">
              {router.asPath === "/loading" ? (
                <Done>Loading Component</Done>
              ) : (
                <DoneText>Loading Component</DoneText>
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
  font-size: 20px;
  color: #c5c5c5; ;
`;
const Lists = styled.ul`
  width: 100%;
  position: relative;
`;
const List = styled.li`
  width: 80%;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const Text = styled.div`
  margin: 10px 0;
  padding: 16px 12px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  cursor: pointer;
  :hover {
    width: 100%;
    padding: 16px 96px 16px 40px;
    color: #fff;
    -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    background-color: #6098ff;
  }
`;

const DoneText = styled.div`
  color: #181818;
  margin: 10px 0;
  padding: 16px 12px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  cursor: pointer;
  :hover {
    width: 100%;
    padding: 16px 96px 16px 40px;
    color: #181818;
    -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    background-color: #6098ff;
  }
`;
const Hover = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 16px 96px 16px 40px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  color: #fff;
  -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  background-color: #6098ff;
`;

const Done = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 16px 96px 16px 40px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  color: #181818;
  -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  background-color: #6098ff;
`;
const Copyright = styled.div`
  padding: 20px 20px;
  font-size: 18px;
  color: #9a9a9a;
`;
