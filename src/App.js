import React, { useEffect, Fragment } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from './components/logs/logs';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <Logs />
    </Fragment>
  );
};

export default App;
