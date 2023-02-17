import { render, screen } from "@testing-library/react";
import TypingEffect from "../TypingEffect";

const renderComponent = async () => {
  const { container } = await render(
    <TypingEffect component="h1" variant="h1" text="I'm Sergio" />
  );

  return container;
};

describe("TypingEffect", () => {
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
