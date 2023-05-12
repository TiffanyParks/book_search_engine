import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query GetSingleUser {
        getSingleUser {
        email
        password
        username
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