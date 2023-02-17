import { render, screen } from "@testing-library/react";
import SocialNetwork from "../SocialNetwork";

const renderComponent = async () => {
  const { container } = await render(<SocialNetwork />);

  return container;
};

describe("SocialNetwork", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
