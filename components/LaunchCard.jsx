import Image from "next/image";

const LaunchCard = ({ launch }) => {
  return (
    <article
      data-testid="launch-card"
      aria-label={`Launch card for ${launch.name}`}
      className="group opacity-90 hover:opacity-100 shadow-md relative rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg max-w-[200px]"
    >
      <div className="flex justify-center items-center h-40">
        <Image
          className={`object-contain max-h-full ${
            !launch.success ? "opacity-50" : ""
          }`}
          src={launch.links?.patch?.small || "/rocket-fill.png"}
          alt="Rocket Patch"
          width={200}
          height={200}
        />
      </div>

      <h2
        className="text-center font-semibold text-white px-2 mt-3"
        title={launch.name}
      >
        {launch.name}
      </h2>

      {!launch.success && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-label="Launch failed"
        >
          <span className="bg-red-800 text-white rounded-md px-4 py-2 font-bold transform -rotate-12 shadow-lg animate-pulse">
            FAILED
          </span>
        </div>
      )}
    </article>
  );
};

export default LaunchCard;
