import styled from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";

export const IntersectionObserver = () => {
  return (
    <>
      <Head>
        <title>Intersection-Observer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <TopSection skill={["", ""]} description={[""]} status={"개발예정"} />
        <SectionContainer>Intersection-Observer</SectionContainer>
      </Wrapper>
    </>
  );
};

export default IntersectionObserver;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;
