import Head from "next/head";
import TopSection from "@/component/TopSection";
import styled from "styled-components";

export const Editor = () => {
  return (
    <>
      <Head>
        <title>Editor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <TopSection skill={["", ""]} description={""} status={"개발예정"} />
        <Container>Editor</Container>
      </Wrapper>
    </>
  );
};

export default Editor;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;
const Container = styled.div`
  position: relative;
  height: calc(75% - 25px);
  margin: 24px 0 0 0;
  padding: 25px;
  background-color: transparent;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 4px 6px 24px 6px rgb(0 0 0 / 20%);
`;
