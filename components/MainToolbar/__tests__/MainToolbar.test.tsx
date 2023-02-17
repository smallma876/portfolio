import { render } from "@testing-library/react";
import MainToolbar from "../MainToolbar";

const renderComponent = async () => {
  const { container } = await render(<MainToolbar />);

  return container;
};

describe("MainToolbar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render match snapshot", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("should render with mobile size", () => {
    const container = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
