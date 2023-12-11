import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
query Root {
    allFilms {
      films {
        title
      }
    }
  }
`;