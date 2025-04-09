const { default: Image } = require("next/image");

const styles = {};

const LaunchCard = ({ launch }) => {
  const formatedDate = (date) => {
    return date.slice(0, 10).split("-").reverse().join("-");
  };
  const status = launch.success ? "success" : "failure";
  return (
    <article key={launch.id} className={styles.launch_card}>
      <Image
        className={styles.img}
        src={launch.links?.patch?.small || "/placeholder.png"} // Use optional chaining and placeholder
        alt="Rocket Patch"
        width={200}
        height={200}
        onError={(e) => {
          e.currentTarget.onerror = null; // prevents infinite loop
          e.currentTarget.src = "/placeholder.png"; // fallback image
        }}
      />
      <h2>{launch.name} </h2>
      <div className={styles.card__content}>
        <p>Date : {formatedDate(launch.date_utc)} </p>
        <p>Launch Status: {status}</p>
        <p>{launch.details} </p>
        {!launch.success && launch.failures && launch.failures.length > 0 && (
          <p>Failure Reason : {launch.failures[0].reason}</p>
        )}
      </div>
    </article>
  );
};

export default LaunchCard;
