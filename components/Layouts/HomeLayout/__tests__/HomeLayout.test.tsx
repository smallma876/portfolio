import { render, screen } from "@testing-library/react";
import HomeLayout from "../HomeLayout";

const renderComponent = async () => {
  const { container } = await render(
    <HomeLayout leftSide="left">Test</HomeLayout>
  );

  return container;
};

describe("HomeLayout", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(screen.getByText("left")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
