import styled, { css } from "styled-components";

const SectionContainer = ({ children }: any) => {
  return <Container>{children}</Container>;
};

interface PropsType {
  map: string;
}
const Container = styled.div`
  position: relative;
  height: calc(77% - 25px);
  margin: 24px 0 0 0;
  padding: ${(props) => (props ? "25px" : "0")};
  background-color: #fff;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 4px 6px 24px 6px rgb(0 0 0 / 20%);
`;

export default SectionContainer;
