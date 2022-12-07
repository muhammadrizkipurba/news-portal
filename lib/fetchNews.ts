import { gql } from "graphql-request";
import sortNewsByImage from './sortNewsByImage';

type fetchNewsProps = {
  category?: Category | string;
  keywords?: string;
  isDynamic?: boolean;
};

const fetchNews = async (props: fetchNewsProps) => {
  // GraphQL Query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        pagination {
          count
          limit
          offset
          total
        }
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
      }
    }
  `;

  // Fetch function with Next.js 13 caching..
  const res = await fetch('https://berea.stepzen.net/api/dunking-lemur/__graphql', {
    method: 'POST',
    cache: props.isDynamic ? "no-cache" : "default",
    next: props.isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: props.category,
        keywords: props.keywords
      }
    })
  });

  const newsResponse = await res.json();

  // Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery)

  return news
};

export default fetchNews;

// Example Stepzen Import
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=8a9d89363846368ff7756449eec329f9&"
