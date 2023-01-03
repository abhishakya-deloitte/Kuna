import './App.css';
import Login from './Components/Login/Login';
import CategoryCRUD from './Components/CategoryCRUD/CategoryCRUD';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if(graphqlErrors){
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphql error ${message}`);
//     });
//   }
// })

// const link = from([
//   errorLink,
//   new HttpLink({ uri : "http://localhost:8000/graphql" }),
// ]);

const client = new ApolloClient({
    cache : new InMemoryCache(),
    uri : "http://127.0.0.1:8000/graphql"
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Login/>
      </div>
    </ApolloProvider>
  );
}

export default App;
