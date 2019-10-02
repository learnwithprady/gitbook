import React from "react";
import RepositoriesList from "../_components/RepositoriesList";
import { useAuth0 } from "../react-auth0-wrapper";


function App() {
  const { loading, user } = useAuth0();
  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div>
        <RepositoriesList username={user.nickname}></RepositoriesList>
    </div>
  );
}

export default App;