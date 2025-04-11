import "@testing-library/jest-dom";
import LaunchCard from "@/components/LaunchCard";
import { render, screen } from "@testing-library/react";
import { mockLaunchBase } from "../../test-utils/__mocks__/launchData.mock";

const mockTestData = mockLaunchBase[0];

describe("LaunchCard", () => {
  it("renders the launch name", () => {
    render(<LaunchCard launch={mockTestData} />);
    expect(screen.getByText(mockTestData.name)).toBeInTheDocument();
  });

  it("renders fallback image if patch is missing", () => {
    const launch = {
      ...mockTestData,
      links: { patch: { small: null } },
    };

    render(<LaunchCard launch={launch} />);
    const image = screen.getByAltText("Rocket Patch");
    expect(image.src).toContain("rocket-fill.png");
  });

  it("shows FAILED badge if launch failed", () => {
    const launch = {
      ...mockTestData,
      success: false,
    };
    render(<LaunchCard launch={launch} />);
    expect(screen.getByText(/FAILED/i)).toBeInTheDocument();
  });

  it("handles empty launch object gracefully", () => {
    render(<LaunchCard launch={{}} />);
    const image = screen.getByAltText("Rocket Patch");
    expect(image.src).toContain("rocket-fill.png");
  });

  it("does not re-render unnecessarily with same props", () => {
    const { rerender } = render(<LaunchCard launch={mockTestData} />);
    const image = screen.getByAltText("Rocket Patch");
    const initialSrc = image.src;

    rerender(<LaunchCard launch={mockTestData} />);
    expect(image.src).toBe(initialSrc);
  });

  it("uses proper image dimensions from Next/Image", () => {
    render(<LaunchCard launch={mockTestData} />);
    const image = screen.getByAltText("Rocket Patch");
    expect(image).toHaveAttribute("width", "200");
    expect(image).toHaveAttribute("height", "200");
  });
});
