import "@testing-library/jest-dom";

import PaginationButtons from "@/components/UI/PaginationButtons";
import { render, screen, fireEvent } from "@testing-library/react";

describe("PaginationButtons", () => {
  const mockOnNext = jest.fn();
  const mockOnPrev = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render current page and total pages", () => {
    render(
      <PaginationButtons
        currentPage={2}
        totalPages={5}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );
    expect(screen.getByText("Page 2 of 5")).toBeInTheDocument();
  });

  it("should disable Previous button on first page", () => {
    render(
      <PaginationButtons
        currentPage={1}
        totalPages={5}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );
    expect(screen.getByText("Previous")).toBeDisabled();
  });

  it("should disable Next button on last page", () => {
    const currentPage = 10;
    const lastPage = 10;

    render(
      <PaginationButtons
        currentPage={currentPage}
        totalPages={lastPage}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );
    expect(screen.getByText("Next")).toBeDisabled();
  });

  it("should call onPrev when Previous button is clicked", () => {
    render(
      <PaginationButtons
        currentPage={2}
        totalPages={5}
        onNext={mockOnNext}
        onPrev={mockOnPrev}
      />
    );
    fireEvent.click(screen.getByText("Previous"));
    expect(mockOnPrev).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Next"));
    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });
});
