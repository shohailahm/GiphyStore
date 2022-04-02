import { gql } from "@apollo/client";

export const trendingQuery = gql`
  query Trending($offset: Int!, $limit: Int!) {
    trending(api_key: ${process.env.REACT_APP_KEY},offset:$offset, limit:$limit)
      @rest(type: "Trending", path: "trending?{args}") {
      url
      id
      images{
        original{
          webp
        }
        original_still{
          url
        }
      }
    }
  }
`;
