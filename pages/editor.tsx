import styled from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";

export const Editor = () => {
  return (
    <>
      <Head>
        <title>Editor</title>
        <meta property="og:title" content="Editor" />
        <meta name="description" content="Editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>

      <Wrapper>
        <TopSection skill={["", ""]} description={[""]} status={"개발예정"} />
        <SectionContainer>Editor</SectionContainer>
      </Wrapper>
    </>
  );
};

export default Editor;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;
