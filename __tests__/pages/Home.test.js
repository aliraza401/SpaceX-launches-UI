import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home, { getServerSideProps } from "@/pages/index";
import { useRouter } from "next/router";
import { fetchLaunches } from "@/services/launch";
import { mockHomeInput } from "../../test-utils/__mocks__/launchData.mock";
import { DEFAULT_LIMIT_SPACEX_API, DEFAULT_PAGE_SPACEX_API } from "@/constants/appConfigs";

// Mock next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock service
jest.mock("./../../services/launch", () => ({
  fetchLaunches: jest.fn(),
}));

describe("Home Page", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
      query: {},
      push: mockPush,
    }));

    jest.clearAllMocks();
  });

  it("renders LaunchList with correct number of cards and launch name", () => {
    render(<Home data={mockHomeInput} />);

    const launchCards = screen.getAllByTestId("launch-card");
    expect(launchCards.length).toBe(mockHomeInput.rockets.length);

    expect(screen.getByText(mockHomeInput.rockets[0].name)).toBeInTheDocument();

    const prevButton = screen.getByText(/previous/i);
    const nextButton = screen.getByText(/next/i);

    if (mockHomeInput.page === 1) {
      expect(prevButton).toBeDisabled();
    }

    if (mockHomeInput.page === mockHomeInput.totalPages) {
      expect(nextButton).toBeDisabled();
    }
  });

  it("fetches launches with default page and limit", async () => {
    fetchLaunches.mockResolvedValue(mockHomeInput);

    const context = { query: {} };
    const response = await getServerSideProps(context);

    expect(fetchLaunches).toHaveBeenCalledWith({
      page: DEFAULT_PAGE_SPACEX_API,
      limit: DEFAULT_LIMIT_SPACEX_API,
    });

    expect(JSON.stringify(response.props.data)).toBe(
      JSON.stringify(mockHomeInput)
    );
  });
});
