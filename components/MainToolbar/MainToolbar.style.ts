import styled from "styled-components";

const Toolbar = styled.div`
  background: #244072;
  height: 3.5rem;
  color: #fff;
  padding: 0 1rem;
`;

interface MenuLateralProps {
  isShow: boolean;
}

const MenuLateral = styled.div<MenuLateralProps>`
  position: fixed;
  top: 0;
  left: ${/*istanbul ignore next */ (props) => (props.isShow ? "0" : "-10rem")};
  bottom: 0;
  width: 10rem;
  background: #04293a;
  transition: left 0.3s ease-out;
  min-width: 10rem;
`;

const IconCloseWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 1rem;
  border: 0;
  background: transparent;
  height: 3.5rem;
`;

export const MainToolbarStyles = {
  Toolbar,
  MenuLateral,
  IconCloseWrapper,
};
