import { render, screen } from "@testing-library/react";
import MainLayout from "../MainLayout";

const renderComponent = async () => {
  const { container } = await render(<MainLayout top="top">Test</MainLayout>);

  return container;
};

describe("MainLayout", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(screen.getByText("top")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
