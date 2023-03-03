import { render, screen } from "@testing-library/react";
import Carousel from "../Carousel";

describe("Carousel test", () => {
  it("Render page carousel", () => {
    const { container } = render(<Carousel />);
    expect(screen.getByText("Carousel")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
