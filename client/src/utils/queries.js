import { gql } from '@apollo/client';

// Example query to fetch user data
export const GET_USER_DATA = gql`
  query GetUserData {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;