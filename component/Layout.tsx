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
  position: relative;
  height: calc(100vh - 72px);
  padding: 36px 24px;
`;

const Section = styled.section`
  position: relative;
  width: calc(100% - 48px);
  height: 100%;
`;
