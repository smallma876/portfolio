import React, { FC, ReactNode } from "react";
import { HomeLayoutStyles } from "./HomeLayout.style";

interface HomeLayoutProps {
  children: ReactNode;
  leftSide: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({
  children,
  leftSide,
}: HomeLayoutProps) => {
  return (
    <HomeLayoutStyles.Wrapper>
      <HomeLayoutStyles.LeftSide>{leftSide}</HomeLayoutStyles.LeftSide>
      <HomeLayoutStyles.RightSide>{children}</HomeLayoutStyles.RightSide>
    </HomeLayoutStyles.Wrapper>
  );
};

export default HomeLayout;
