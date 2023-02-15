import React, { ReactNode } from "react";
import { GiantTextStyles } from "./GiantText.styled";

interface GiantTextProps {
  children: ReactNode;
  color?: string;
}

const GiantText = ({ children, ...rest }: GiantTextProps) => {
  return (
    <GiantTextStyles.Wrapper {...rest}>{children}</GiantTextStyles.Wrapper>
  );
};

export default GiantText;
