import LaunchCard from "./LaunchCard";
import PaginationButtons from "./UI/PaginationButtons";
import React from "react";
import { useRouter } from "next/router";

const LaunchList = ({
  rockets,
  totalPages,
  page,
  limit,
  hasPrevPage,
  hasNextPage,
}) => {
  const router = useRouter();

  const onPageChange = (action) => {
    let newPage = page;
    if (action === "NEXT" && hasNextPage) {
      newPage = page + 1;
    } else if (action === "PREV" && hasPrevPage) {
      newPage = page - 1;
    }

    if (newPage !== page) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: newPage },
      });
    }
  };

  return (
    <div className="my-5" data-testid="home-main">
      <section
        role="card-container"
        aria-label="List of SpaceX launches"
        className="flex flex-wrap gap-8 justify-center"
      >
        {rockets?.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </section>
      {rockets?.length && (
        <PaginationButtons
          currentPage={page}
          totalPages={totalPages}
          onNext={() => onPageChange("NEXT")}
          onPrev={() => onPageChange("PREV")}
        />
      )}
    </div>
  );
};

export default LaunchList;
