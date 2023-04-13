import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>F:E Func, Development</title>
        <meta property="og:title" content="F:E Func, Development" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="프론트엔드에서 사용자에게 자주 사용되고 활용도가 높은 기능 리스트업 및 학습, 개발"
        />
        <meta
          name="description"
          content="프론트엔드에서 사용자에게 자주 사용되고 활용도가 높은 기능 리스트업 및 학습, 개발"
        />
        <meta
          property="og:image"
          content="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.velog.io%2Fimages%2Fjay%2Fpost%2F3a497590-d1b6-414c-9f3f-7b6c7eb18f6d%2Fimg.png&tbnid=tYH2z8wiyCJGTM&vet=12ahUKEwiq_NbL0aT-AhWcplYBHYWUCasQMygCegUIARCOAQ..i&imgrefurl=https%3A%2F%2Fvelog.io%2F%40jay%2FNext.js-%25EB%259D%25BC%25EC%259A%25B0%25ED%258C%2585&docid=xdMORv4hbWZZ0M&w=1000&h=571&q=next.js&ved=2ahUKEwiq_NbL0aT-AhWcplYBHYWUCasQMygCegUIARCOAQ"
        />
        <meta
          property="og:url"
          content="https://f-e-func-development.vercel.app/"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="0d30fb5ec2a7aeebe0f1bcc20bc20ac0bb3329c1"
        />
      </Head>
      <Section>
        <Wrapper>
          <Title>Project의 기능</Title>
          <Content>React Hook Form 을 이용한 회원가입 및 로그인</Content>
          <Content>Form data, Multer를 활용한 업로드 및 다운로드</Content>
          <Content>Mark dwon 문법이 적용된 Editor</Content>
          <Content>Email-js 를 통한 메일 전송</Content>
          <Content>Calendar를 통한 일정추가</Content>
          <Content>Kakao Map Api를 사용한 실시간 좌표값</Content>
          <Content>Intersection observer</Content>
          <Content>상태값에 따른 Loading Component</Content>
        </Wrapper>
      </Section>
    </>
  );
}

const Section = styled.section`
  position: relative;
  width: calc(100% - 48px);
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 4px 6px 24px 6px rgb(0 0 0 / 20%);
`;

const Wrapper = styled.div`
  padding: 25px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin: 0 0 50px;
`;
const Content = styled.div`
  color: #5f5f5f;
  font-size: 22px;
  margin: 0 0 20px;
`;
