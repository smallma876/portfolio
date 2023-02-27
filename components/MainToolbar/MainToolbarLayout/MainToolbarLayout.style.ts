import styled from "styled-components";

const toolbarHeight = "3.5rem";

const Wrapper = styled.div`
  height: 100%;
`;

const Top = styled.div`
  height: ${toolbarHeight};
`;

const Bottom = styled.div`
  height: calc(100% - ${toolbarHeight});
`;

export const MainLayoutStyles = {
  Wrapper,
  Top,
  Bottom,
};
