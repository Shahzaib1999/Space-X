import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import { LaunchListContainer } from "./components/LaunchList/LaunchListContainer";
import { LaunchInfoContainer } from "./components/LaunchInfo/LaunchProfileContainer";
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { persistCache } from "apollo-cache-persist";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Logo from './assets/logo.png';
import { Loader } from "./components/Loader/Loader";

function App() {
  // const [client, setClient] = useState<any>();

  // useEffect(() => {
  //   const cache: any = new InMemoryCache({
  //     typePolicies: {
  //       Query: {
  //         fields: {
  //           launches: offsetLimitPagination(),
  //           histories: offsetLimitPagination(),
  //         },
  //       },
  //     },
  //   });

  //   const client = new ApolloClient({
  //     uri: "https://spacexdata.herokuapp.com/graphql",
  //     cache,
  //   });

  //   persistCache({
  //     cache,
  //     storage: window.localStorage as PersistentStorage<
  //       PersistedData<NormalizedCacheObject>
  //     >,
  //   }).then(() => {
  //     setClient(client);
  //   });
  // }, []);
  // if (client === undefined) {
  //   return <Loader />;
  // }

  return (
    <Router>
      <Switch>
        {/* <ApolloProvider client={client}> */}
          <div className="App">
          <img src={Logo} alt="logo" className="logo" />
            <Route exact path="/">
              <LaunchListContainer />
            </Route>
            <Route exact path="/launch/:id">
              <LaunchInfoContainer />
            </Route>
          </div>
        {/* </ApolloProvider> */}
      </Switch>
    </Router>
  );
}

export default App;
