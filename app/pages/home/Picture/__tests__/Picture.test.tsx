import { render, screen } from "@testing-library/react";
import Picture from "../Picture";

const renderComponent = () => {
  const { container } = render(<Picture url={"https://fakeUrl.com"} />);

  return container;
};

describe("Picture", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(screen.getByAltText("picture-perfil")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
