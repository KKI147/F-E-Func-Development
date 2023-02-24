import styled from "styled-components";
interface PropsTypes {
  skill: string;
  description: string;
  status: string;
}

export const TopSection = ({ skill, description, status }: PropsTypes) => {
  return (
    <Container>
      <Content>
        <Title>Skill,</Title>
        <Skill>{skill}</Skill>
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
  width: calc(100% - 15px);
  height: calc(20% - 10px);
  background-color: transparent;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 4px 6px 24px 6px rgb(0 0 0 / 20%);
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
  width: 120px;
  height: 30px;
  align-items: center;
  font-weight: bold;
`;
const Skill = styled.div`
  display: flex;
  width: 120px;
  height: 30px;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #fbe300;
  border-radius: 8px;
  font-weight: bold;
`;
