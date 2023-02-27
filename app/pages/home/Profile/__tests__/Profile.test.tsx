import { render, screen } from "@testing-library/react";
import Profile from "../Profile";

const renderComponent = () => {
  const { container } = render(<Profile title="hola mundo" />);

  return container;
};

describe("Profile", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(screen.getByText("hola mundo")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
