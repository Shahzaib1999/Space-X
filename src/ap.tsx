import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import { LaunchListContainer } from "./components/LaunchList/LaunchListContainer";
import { LaunchInfoContainer } from "./components/LaunchInfo/LaunchProfileContainer";
import { LaunchList } from "./components/LaunchList/LaunchList";
import { LaunchInfo } from "./components/LaunchInfo/LaunchInfo";
import getApolloClient from "./apolloClient";
import { ApolloProvider } from "@apollo/client";

function Ap() {
  const [id, setId] = useState(42);
  const handleIdChange = useCallback((newId) => {
    setId(newId);
  }, []);

//   const [client, setClient] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     getApolloClient().then((client) => {
//       setClient(client as any)
//       setLoading(false)
//       console.log(client);
      
//     })
//   }, [])

//   if (loading || !client) {
//     return (
//       <div >
//         <h1>Loading...</h1>
//       </div>
//     )
//   }

  return (
    <div className="App">
      <LaunchListContainer handleIdChange={handleIdChange} />
      <LaunchInfoContainer id={id} />
      {/* <LaunchList handleIdChange={handleIdChange} />
      <LaunchInfo id={id} /> */}
    </div>
  );
}

export default Ap;
