import { render } from "@testing-library/react";
import Picture from "../Picture";

const renderComponent = async () => {
  const { container } = await render(<Picture />);

  return container;
};

describe("Picture", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
