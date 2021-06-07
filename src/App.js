import React, { useEffect } from "react";
import {Provider} from 'react-redux'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import store from './Store';

import SearchBar from "./components/layout/SearchBar";
import Logs from './components/logs/logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/addlogmodal';


const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
        <SearchBar />
      <div className='container'>
    
      <AddLogModal />
      <Logs />
      <AddBtn />
      </div>
  
    </Provider>
  );
};

export default App;
