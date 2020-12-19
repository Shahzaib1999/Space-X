import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import { LaunchListContainer } from "./components/LaunchList/LaunchListContainer";
import { LaunchInfoContainer } from "./components/LaunchInfo/LaunchProfileContainer";
import { LaunchList } from "./components/LaunchList/LaunchList";
import { LaunchInfo } from "./components/LaunchInfo/LaunchInfo";
import getApolloClient from "./apolloClient";
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { persistCache } from "apollo-cache-persist";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";

import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

import Ap from "./ap";

function App() {
  // const [id, setId] = useState(42);
  // const handleIdChange = useCallback((newId) => {
  //   setId(newId);
  // }, []);

  // const [client, setClient] = useState(null)
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   getApolloClient().then((client) => {
  //     setClient(client as any)
  //     setLoading(false)
  //     console.log(client);

  //   })
  // }, [])

  // if (loading || !client) {
  //   return (
  //     <div >
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }

  const [client, setClient] = useState<any>();

  useEffect(() => {
    const cache: any = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            launches: offsetLimitPagination(),
            histories: offsetLimitPagination(),
          },
        },
      },
    });

    const client = new ApolloClient({
      uri: "https://spacexdata.herokuapp.com/graphql",
      cache,
    });

    persistCache({
      cache,
      storage: window.localStorage as PersistentStorage<
        PersistedData<NormalizedCacheObject>
      >,
    }).then(() => {
      setClient(client);
    });
  }, []);
  if (client === undefined) {
    return <h1>loading</h1>;
  }

  return (
    <Router>
      <Switch>
    <ApolloProvider client={client}>
      {/* <h1>Space-X</h1> */}
      <div className="App">
        {/* <Routes> */}
        {/* <Route path="/" element={<LaunchListContainer />}></Route> */}
        <Route exact path="/">
        <Ap />

        </Route>
        
        {/* <LaunchListContainer handleIdChange={handleIdChange} />
      <LaunchInfoContainer id={id} /> */}
        {/* <LaunchList handleIdChange={handleIdChange} />
      <LaunchInfo id={id} /> */}
      </div>
    </ApolloProvider>
    </Switch>
    </Router>
  );
}

export default App;
