import useSpaceXLaunches from "@/hooks/useSpaceXLaunches";
import LaunchCard from "./LaunchCard";
const styles = {};

const LaunchList = () => {
  const { launches, loading, error } = useSpaceXLaunches();

  const renderCards = launches?.map((launch) => (
    <LaunchCard key={launch.id} launch={launch} />
  ));

  return (
    <section role="card-container" className={styles.main__section}>
      {renderCards}
    </section>
  );
};

export default LaunchList;
