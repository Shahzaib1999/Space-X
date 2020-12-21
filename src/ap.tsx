import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import { LaunchListContainer } from "./components/LaunchList/LaunchListContainer";
import { LaunchInfoContainer } from "./components/LaunchInfo/LaunchProfileContainer";
import { LaunchList } from "./components/LaunchList/LaunchList";
import { LaunchInfo } from "./components/LaunchInfo/LaunchInfo";
import getApolloClient from "./apolloClient";
import { ApolloProvider } from "@apollo/client";
import Logo from './assets/logo.png';

function Ap() {
  const [id, setId] = useState(42);
  const handleIdChange = useCallback((newId) => {
    setId(newId);
  }, []);

  useEffect(() => {
    console.log('render');
    
  }, [])

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
    <>
      <img src={Logo} alt="logo" width={600} />
      {/* <h1 className="text-center text-white">Space-X</h1> */}
      <LaunchListContainer />
       {/* <LaunchInfoContainer id={id} /> */}
       {/* <LaunchList handleIdChange={handleIdChange} />
       <LaunchInfo id={id} /> */}
    </>
  );
}

export default Ap;
