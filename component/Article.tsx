import styled from "styled-components";

export const Article = () => {
  return (
    <Layout>
      <div>
        <div>Skill,</div>
        <div>join</div>
      </div>
      <div>
        <div>Description,</div>
        <div>회원가입 페이지</div>
      </div>
      <div>
        <div>Status,</div>
        <div>개발전</div>
      </div>
    </Layout>
  );
};

const Layout = styled.section`
  width: calc(100% - 15px);
  height: 200px;
  margin: 20px 15px 20px 0;
  background-color: transparent;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 4px 6px 24px 6px rgb(0 0 0 / 20%);
`;
export default Article;
