import styled, { css } from "styled-components";

const SectionContainer = ({ children, padding }: any) => {
  return <Container padding={padding}>{children}</Container>;
};

const Container = styled.div<any>`
  position: relative;
  height: calc(77% - 25px);
  margin: 24px 0 0 0;
  padding: ${(props) => (props.padding ? props.padding : "25px")};
  background-color: #fff;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 4px 6px 24px 6px rgb(0 0 0 / 20%);
`;

export default SectionContainer;
