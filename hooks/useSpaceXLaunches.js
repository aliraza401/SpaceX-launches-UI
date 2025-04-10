import { fetchLaunches } from "@/services/launch";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export default function useSpaceXLaunches() {
  const {
    data: launches,
    error,
    fetchNextPage,
    hasNextPage,
    loading,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["SPACE_X_LAUNCHES"],
    queryFn: fetchLaunches,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.hasNextPage,
  });

  return { launches, loading, error, fetchNextPage, hasNextPage };
}
