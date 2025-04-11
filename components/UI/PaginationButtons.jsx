import Button from "./Button/Button";

const PaginationButtons = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className="flex justify-center gap-4 mt-6" data-testid="pagination">
      <Button
        onClick={onPrev}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Previous
      </Button>

      <span className="text-white font-medium flex items-center">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        onClick={onNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationButtons;
