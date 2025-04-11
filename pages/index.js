import StarryBackground from "@/components/UI/StarryBackground/StarryBackground";
import { fetchLaunches } from "@/services/launch";
import LaunchList from "@/components/LaunchList";
import MetaController from "@/components/MetaController";
import { getPaginationParams } from "@/utils";

export default function Home({ data }) {
  const { rockets, totalPages, page, limit, hasPrevPage, hasNextPage } = data;

  return (
    <>
      <MetaController
        title={`SpaceX - Info`}
        description={`Details about SpaceX launch`}
      />
      <StarryBackground />
      <main>
        <LaunchList
          rockets={rockets}
          totalPages={totalPages}
          page={page}
          limit={limit}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { page, limit } = getPaginationParams(query);

  const response = await fetchLaunches({ page, limit });

  return {
    props: {
      data: { ...response },
    },
  };
}
