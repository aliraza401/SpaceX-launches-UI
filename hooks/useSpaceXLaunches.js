import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useSpaceXLaunches() {
  const fetchLaunches = async () => {
    const queryPayload = {
      select: "id name date_utc success upcoming details failures links",
      sort: "date_utc",
      limit: 150,
    };

    try {
      const url = "https://api.spacexdata.com/v5/launches/query";
      const response = await axios.post(url, {
        options: queryPayload,
      });
      return response.data.docs;
    } catch (err) {
      setError(err);
    } finally {
    }
  };

  const {
    data: launches,
    loading,
    error,
  } = useQuery({ queryKey: ["queryLanuches"], queryFn: fetchLaunches });

  return { launches, loading, error };
}
