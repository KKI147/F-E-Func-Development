import styled from "styled-components";
interface PropsTypes {
  skill: string[];
  description: string[];
  status: string;
}

export const TopSection = ({ skill, description, status }: PropsTypes) => {
  localStorage.setItem("Status", status);
  return (
    <Container>
      <Content>
        <Title>Skill,</Title>
        {skill.map((item, index) => {
          return <Skill key={index}>{item}</Skill>;
        })}
      </Content>
      <Content>
        <Title>Description,</Title>
        {description.map((item, index) => {
          return <ApiContent key={index}>{item}</ApiContent>;
        })}
      </Content>
      <Content>
        <Title>Status,</Title>
        <Detail>{status}</Detail>
      </Content>
    </Container>
  );
};

export default TopSection;

const Container = styled.section`
  position: relative;
  height: calc(23% - 10px);
  padding: 16px 20px;
  background-color: transparent;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 2px 6px 8px 4px rgb(0 0 0 / 15%);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: calc(100% / 3);
  padding: 0px 15px;
`;
const Title = styled.div`
  display: flex;
  width: 120px;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
`;

const Skill = styled.div`
  display: flex;
  width: fit-content;
  height: 30px;
  margin: 0 16px 0 0;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #fbe300;
  border-radius: 8px;
  font-weight: 500;
`;

const Detail = styled.div`
  display: flex;
  width: fit-content;
  height: 30px;
  align-items: center;
  font-weight: 500;
`;

const ApiContent = styled.div`
  display: flex;
  width: fit-content;
  height: 30px;
  align-items: center;
  font-weight: 500;
  margin: 0 30px 0 0;
`;
