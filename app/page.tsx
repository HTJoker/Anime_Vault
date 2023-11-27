import { LoadMore } from "@components";
import { fetchAnime } from "./action";
import type { NextPage } from "next";

const Home: NextPage = async () => {
  const data = await fetchAnime(1);
  return (
    <main className="flex flex-col gap-10 px-8 py-16 sm:p-16">
      <h2 className="text-3xl font-bold text-white">Explore Anime</h2>

      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data}
      </section>
      <LoadMore />
    </main>
  );
};

export default Home;
