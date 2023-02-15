import React, { FC, ReactNode } from "react";
import { MainLayoutStyles } from "./MainLayout.style";

interface MainLayoutProps {
  children: ReactNode;
  top: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({
  children,
  top,
}: MainLayoutProps) => {
  return (
    <MainLayoutStyles.Wrapper>
      <MainLayoutStyles.Top>{top}</MainLayoutStyles.Top>
      <MainLayoutStyles.Bottom>{children}</MainLayoutStyles.Bottom>
    </MainLayoutStyles.Wrapper>
  );
};

export default MainLayout;
