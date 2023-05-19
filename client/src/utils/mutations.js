import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation SaveBook($bookData: BookInput) {
    saveBook(bookData: $bookData) {
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
`

export const DELETE_BOOK = gql`
mutation DeleteBook($bookId: String) {
    deleteBook(bookId: $bookId) {
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
`