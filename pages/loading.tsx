import Head from "next/head";
import TopSection from "@/component/TopSection";
import styled from "styled-components";
import SectionContainer from "@/component/SectionContainer";
import LoadingComponent from "@/component/LoadingComponent";

export const Loading = () => {
  return (
    <>
      <Head>
        <title>Loading-Component</title>
        <meta property="og:title" content="Loading-Component" />
        <meta
          name="description"
          content="boolean 값을 통한 loading-component"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>
      <Wrapper>
        <TopSection
          skill={["CSS"]}
          description={["Loading"]}
          status={"개발완료"}
        />
        <SectionContainer>
          <LoadingComponent />
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default Loading;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;
