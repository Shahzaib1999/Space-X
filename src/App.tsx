import React, { useCallback, useState } from "react";

import "./App.css";
import { LaunchListContainer } from "./components/LaunchList/LaunchListContainer";
import { LaunchInfoContainer } from "./components/LaunchInfo/LaunchProfileContainer";
import { LaunchList } from "./components/LaunchList/LaunchList";
import { LaunchInfo } from "./components/LaunchInfo/LaunchInfo";

function App() {
  const [id, setId] = useState(42);
  const handleIdChange = useCallback((newId) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchListContainer handleIdChange={handleIdChange} />
      <LaunchInfoContainer id={id} />
      {/* <LaunchList handleIdChange={handleIdChange} />
      <LaunchInfo id={id} /> */}
    </div>
  );
}

export default App;
