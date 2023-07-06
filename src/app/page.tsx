import { ItemsList } from "@/app/components";

const Home = async () => {
  return (
    <main>
      <ItemsList
        search="games"
        page_title="Games"
        page_size={6}
        className="mb-6"
      />
      <ItemsList
        search="platforms"
        page_title="Platforms"
        page_size={6}
        className="mb-6"
      />
      <ItemsList search="genres" page_title="Genres" page_size={6} />
    </main>
  );
};

export default Home;
