import { render, screen } from "@testing-library/react";
import GiantText from "../GiantText";

const renderComponent = async () => {
  const { container } = await render(<GiantText>Test</GiantText>);

  return container;
};

describe("GiantText", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
