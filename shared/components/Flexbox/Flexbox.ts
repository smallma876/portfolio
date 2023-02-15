import React from "react";
import styled from "styled-components";

interface FlexboxProps extends React.CSSProperties {
  justifyContent?: string;
  alignItems?: string;
}

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
`;

export const Box = styled.div``;
