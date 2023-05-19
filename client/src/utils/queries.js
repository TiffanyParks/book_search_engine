import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Query {
    getSingleUser {
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;