import { gql } from "@apollo/client";

export const SearchQuery = gql`
  query Search($offset: Int!, $limit: Int!,$q:String!) {
    search(api_key: ${process.env.REACT_APP_KEY},q:$q,offset:$offset, limit:$limit)
      @rest(type: "Search", path: "search?{args}") {
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
