import React, { FC, ReactNode } from "react";
import { MainToolbar } from "../MainToolbar";
import { MainLayoutStyles } from "./MainToolbarLayout.style";

interface MainToolbarLayoutProps {
  children: ReactNode;
}

export const MainToolbarLayout: FC<MainToolbarLayoutProps> = ({
  children,
}: MainToolbarLayoutProps) => {
  return (
    <MainLayoutStyles.Wrapper>
      <MainLayoutStyles.Top>
        <MainToolbar />
      </MainLayoutStyles.Top>
      <MainLayoutStyles.Bottom>{children}</MainLayoutStyles.Bottom>
    </MainLayoutStyles.Wrapper>
  );
};
