import React, { Fragment, useEffect } from "react";
import {connect} from 'react-redux';
import {getLogs} from '../../actions/logActions'
import LogItems from "./logitems";

const Logs = ({logs, loading, getLogs}) => {
 


  useEffect(() => {
    getLogs();
  }, []);



  if (loading || logs === null) {
    return <Fragment>Loading...</Fragment>;
  }

  return (
    <Fragment>
            <div className="container ">
      <ul className="collection center">
        <li className="collection-item">
          <h4>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p>No Logs Yet</p>
        ) : (
          logs.map((log) => {
            return (
            <LogItems key={log.id} log={log}/>
            );
          })
        )}
      </ul></div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  logs : state.log.logs,
  loading : state.log.loading
});

export default connect(mapStateToProps, {getLogs})(Logs);
