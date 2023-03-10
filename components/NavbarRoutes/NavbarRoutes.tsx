import Link from "next/link";
import React from "react";
import { navbarRouter } from "../../global";
import { NavbarRoutesStyles } from "./NavbarRoutes.styled";

const NavbarRoutes = () => {

  return (
    <NavbarRoutesStyles.Navbar>
      {navbarRouter.map(({ name, path }) => (
        <NavbarRoutesStyles.NavbarItem key={name}>
          <Link href={path}>{name}</Link>
        </NavbarRoutesStyles.NavbarItem>
      ))}
    </NavbarRoutesStyles.Navbar>
  );
};

export default NavbarRoutes;

