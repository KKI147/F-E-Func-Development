import styled from "styled-components";
import NavBar from "@/component/NavBar";
import { PropsWithChildren, ReactNode } from "react";
import TopSection from "./TopSection";

interface LayoutProps {}

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  console.log(children);
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
  height: 100vh;
  padding: 36px 24px;
  background: url("/images/Background.svg");
`;

const Section = styled.section`
  position: relative;
  width: calc(100% - 48px);
  height: 100%;
  z-index: 2;
`;
