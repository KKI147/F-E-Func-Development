import styled from "styled-components";

export default function LoadingComponent() {
  return <Spinner></Spinner>;
}

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 160px;
  border: 24px solid rgba(255, 165, 0, 0.4);
  border-top: 24px solid rgba(255, 165, 0, 1);
  border-radius: 50%;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
