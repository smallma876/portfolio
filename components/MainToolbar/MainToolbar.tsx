import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Box, Flexbox } from "../../shared/components/Flexbox/Flexbox";
import { useMediaQuery } from "../../utils/useMediaQuery";
import NavbarRoutes from "../NavbarRoutes/NavbarRoutes";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import { MainToolbarStyles } from "./MainToolbar.style";

const MainToolbar = () => {
  const { isEqualOrLessThanMedium } = useMediaQuery();
  const [showMenu, setShowMenu] = useState(false);
  const toogleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    if (!isEqualOrLessThanMedium) {
      setShowMenu(false);
    }
  }, [isEqualOrLessThanMedium]);

  return (
    <>
      <MainToolbarStyles.Toolbar>
        <Flexbox
          justifyContent="space-between"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Box>
            {isEqualOrLessThanMedium ? (
              <Image
                src="./images/menu.svg"
                alt="menu"
                width={30}
                height={30}
                style={{ cursor: "pointer" }}
                onClick={toogleMenu}
              />
            ) : (
              <SocialNetwork />
            )}
          </Box>
          <Box>{!isEqualOrLessThanMedium && <NavbarRoutes />}</Box>
        </Flexbox>
      </MainToolbarStyles.Toolbar>
      {isEqualOrLessThanMedium && (
        <MainToolbarStyles.MenuLateral isShow={showMenu}>
          <MainToolbarStyles.IconCloseWrapper>
            <Image
              src="./images/close.svg"
              alt="menu"
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
              onClick={toogleMenu}
            />
          </MainToolbarStyles.IconCloseWrapper>
          <NavbarRoutes />
        </MainToolbarStyles.MenuLateral>
      )}
    </>
  );
};

export default MainToolbar;
