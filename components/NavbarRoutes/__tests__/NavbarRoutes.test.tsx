import { render, screen } from "@testing-library/react";
import NavbarRoutes from "../NavbarRoutes";

const renderComponent = async () => {
  const { container } = await render(<NavbarRoutes />);

  return container;
};

describe("NavbarRoutes", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
