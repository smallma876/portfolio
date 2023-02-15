import styled from "styled-components";

interface WrapperProps {
  color?: string;
}

const Wrapper = styled.h1<WrapperProps>`
  margin: 0;
  font-size: 2rem;
  color: ${(props) => props.color};
`;

export const GiantTextStyles = {
  Wrapper,
};
