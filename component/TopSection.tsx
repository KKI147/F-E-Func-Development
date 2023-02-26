import styled from "styled-components";
interface PropsTypes {
  skill: string[];
  description: string;
  status: string;
}

export const TopSection = ({ skill, description, status }: PropsTypes) => {
  console.log(skill);
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
        <Detail>{description}</Detail>
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
  height: calc(25% - 10px);
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
  height: 30px;
  align-items: center;
`;

const Detail = styled.div`
  display: flex;
  width: fit-content;
  height: 30px;
  align-items: center;
  font-weight: bold;
`;
const Skill = styled.div`
  display: flex;
  width: fit-content;
  height: 30px;
  margin: 0 10px 0 0;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #fbe300;
  border-radius: 8px;
  font-weight: bold;
`;
