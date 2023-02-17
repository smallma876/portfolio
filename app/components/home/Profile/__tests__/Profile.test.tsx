import { render } from "@testing-library/react";
import Profile from "../Profile";

const renderComponent = async () => {
  const { container } = await render(<Profile />);

  return container;
};

describe("Profile", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
