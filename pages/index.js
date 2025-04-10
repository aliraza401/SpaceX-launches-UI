import Head from "next/head";
import Header from "@/components/Header";
import StarryBackground from "@/components/UI/StarryBackground/StarryBackground";
import { fetchLaunches } from "@/services/launch";
import LaunchList from "@/components/LaunchList";
import MetaController from "@/components/MetaController";

export default function Home({ data }) {
  const { rockets, totalPages, page, limit, hasPrevPage, hasNextPage } = data;

  return (
    <>
      <MetaController
        title={`SpaceX - ${launch.mission_name}`}
        description={`Details about SpaceX ${launch.mission_name} launch`}
      />
      <Header />
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
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 50;

  const response = await fetchLaunches({ page, limit });

  return {
    props: {
      data: { ...response },
      revalidate: 60,
    },
  };
}
