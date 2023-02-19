import styled from "styled-components";
import NavBar from "@/component/NavBar";
import Article from "@/component/Article";
import { PropsWithChildren, ReactNode } from "react";

interface LayoutProps {}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <LayoutComponent>
      <NavBar />
      <SectionLayout>
        <Article />
        <Section>{children}</Section>
      </SectionLayout>
    </LayoutComponent>
  );
}

const LayoutComponent = styled.section`
  display: flex;
`;

const SectionLayout = styled.section`
  width: calc(70% - 15px);
  margin-left: 15px;
`;
const Section = styled.div`
  background-color: purple;
`;
