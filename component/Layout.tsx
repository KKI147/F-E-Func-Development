import styled from "styled-components";
import NavBar from "@/component/NavBar";
import { PropsWithChildren, ReactNode } from "react";

interface LayoutProps {}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <LayoutComponent>
      <NavBar />
      <Section>{children}</Section>
    </LayoutComponent>
  );
}

const LayoutComponent = styled.div`
  display: flex;
`;

const Section = styled.section`
  position: relative;
  width: calc(100% - 15px);
  height: calc(100vh - 40px);
  padding: 20px 15px 20px 0;
  /* margin: 20px 15px 20px 0; */
`;
