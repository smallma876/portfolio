import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (min-width: 769px) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
  }
`;

const LeftSide = styled.div`
  justify-self: center;
`;

const RightSide = styled.div`
  justify-self: center;
  @media (min-width: 769px) {
    justify-self: left;
  }
`;

export const HomeLayoutStyles = {
  Wrapper,
  LeftSide,
  RightSide,
};
