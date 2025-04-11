import "@testing-library/jest-dom";

import LaunchList from "@/components/LaunchList";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { mockLaunchBase } from "../../test-utils/__mocks__/launchData.mock";

// Mock next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("LaunchList", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
      query: {},
      push: mockPush,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render launch cards", () => {
    render(
      <LaunchList
        rockets={mockLaunchBase}
        totalPages={3}
        page={1}
        hasNextPage={true}
        hasPrevPage={false}
      />
    );
    expect(screen.getByText(mockLaunchBase[0].name)).toBeInTheDocument();
  });

  it("should not render pagination when no rockets", () => {
    render(
      <LaunchList
        rockets={[]}
        totalPages={0}
        page={1}
        hasNextPage={false}
        hasPrevPage={false}
      />
    );
    expect(screen.queryByTestId("pagination")).toBeNull();
  });

  it("should call router.push with next page when next is clicked", () => {
    render(
      <LaunchList
        rockets={mockLaunchBase}
        totalPages={3}
        page={1}
        hasNextPage={true}
        hasPrevPage={false}
      />
    );
    screen.getByText("Next").click();
    expect(mockPush).toHaveBeenCalledWith({
      pathname: "/",
      query: { page: 2 },
    });
  });


  it("should not change page when at boundaries", () => {
    render(
      <LaunchList
        rockets={mockLaunchBase}
        totalPages={3}
        page={1}
        hasNextPage={true}
        hasPrevPage={false}
      />
    );
    screen.getByText("Previous").click();
    expect(mockPush).not.toHaveBeenCalled();
  });
});
