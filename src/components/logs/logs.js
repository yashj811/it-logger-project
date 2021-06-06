import React, { Fragment, useEffect, useState } from "react";
import LogItems from "./logitems";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);

    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
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
              <li className="collection-item" key={log.id}>
                  {log.message} 
                {" "}
                <LogItems  message={log.message} />{" "}
              </li>
            );
          })
        )}
      </ul></div>
    </Fragment>
  );
};

export default Logs;
