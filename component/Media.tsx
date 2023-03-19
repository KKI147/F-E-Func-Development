import styled from "styled-components";

export default function Media() {
  return (
    <Layout>
      <ContentBox>
        <div>
          <div>현재 해상도를 지원하지 않습니다.</div>
          <div>
            브라우저 크기 해상도를 줄이거나&#40; ctrl &#43; &#45; &#41; &#44;
          </div>
          <div>최소 1200px &#42; 580px 이상의 환경에서 접속해주세요.</div>
        </div>
      </ContentBox>
    </Layout>
  );
}

const Layout = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #232323;
    z-index: 5;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  width: 50%;
  height: 50%;
  font-size: 16px;
  line-height: 2;
  text-align: center;
  margin: 0 auto;
`;
