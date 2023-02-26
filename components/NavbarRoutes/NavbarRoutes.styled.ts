import styled from "styled-components";

const Navbar = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavbarItem = styled.li`
  padding: 1rem;
  margin: 0;
  height: 3.5rem;
  :hover {
    background: #1c3462;
    color: #FFFFFF;
  }
`;

export const NavbarRoutesStyles = {
  Navbar,
  NavbarItem,
};
