import "@testing-library/jest-dom";
import Button from "@/components/UI/Button/Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  it("should render children text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText("Disabled")).toBeDisabled();
  });

  it("should merge custom className with base styles", () => {
    render(<Button className="custom-class">Test</Button>);
    const button = screen.getByText("Test");
    expect(button).toHaveClass("custom-class");
  });

  it("should pass and apply rest props to the button element", () => {
    render(
      <Button aria-label="test-button-aria-label">
        Test Prop
      </Button>
    );
    const button = screen.getByText("Test Prop");
    expect(button).toHaveAttribute("aria-label", "test-button-aria-label");
  });
});
