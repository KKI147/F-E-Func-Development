import styled from "styled-components";
import Head from "next/head";
import SectionContainer from "@/component/SectionContainer";
import TopSection from "@/component/TopSection";

export const Calendar = () => {
  return (
    <>
      <Head>
        <title>Calendar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <TopSection skill={["", ""]} description={[""]} status={"개발예정"} />
        <SectionContainer>Calendar</SectionContainer>
      </Wrapper>
    </>
  );
};

export default Calendar;

const Wrapper = styled.section`
  position: relative;
  height: 100%;
`;
