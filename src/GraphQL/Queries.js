import {gql} from '@apollo/client';

export  const LOAD_USERS = gql`
        query getCategory {
            category(id : 4){
              name
              createdOn
            }
          }
`