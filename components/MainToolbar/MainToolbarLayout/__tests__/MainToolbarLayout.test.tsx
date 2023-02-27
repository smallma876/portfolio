import { render, screen } from "@testing-library/react";
import { MainToolbarLayout } from "../MainToolbarLayout";

const renderComponent = async () => {
  const { container } = await render(
    <MainToolbarLayout>Test</MainToolbarLayout>
  );

  return container;
};

describe("MainLayout", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
