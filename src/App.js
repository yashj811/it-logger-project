import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from './components/logs/logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/addlogmodal';


const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
        <SearchBar />
      <div className='container'>
    
      <AddLogModal />
      <Logs />
      <AddBtn />
      </div>
  
    </Fragment>
  );
};

export default App;
