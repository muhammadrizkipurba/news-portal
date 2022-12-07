import { categories } from "../constants";
import fetchNews from '../lib/fetchNews';
import NewsList from "./NewsList";

const HomePage = async () => {
  // Fetch the news data
  const news: NewsReponse = await fetchNews({category: categories.join(",")});

  return (
    <div>
      {/* NewsList */}
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
