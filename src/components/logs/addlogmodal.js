import { Fragment, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please fill the details !!" });
    } else {
      console.log(message, tech, attention);
    }
  };

  return (
    <Fragment>
      <div id="add-log-modal" className="modal" style={modalStyles}>
        <div className="modal-content" style={divStyles}>
          <h4>Enter System Log</h4>
        </div>
        <div className="row" style={divStyles}>
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row" style={divStyles}>
          <div className="input-field">
            <select
              className="browser-default"
              name="tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select a Technician
              </option>
              <option value="John Dow">John Dow</option>
              <option value="Yash Jain">Yash Jain</option>
              <option value="Sam Smith">Sam Smith</option>
            </select>
          </div>
        </div>
        <div className="row" style={divStyles}>
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Attention Required</span>
              </label>
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="add log"
              onClick={onSubmit}
            >
              Add Log
              <i className="material-icons right">add</i>
            </button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

const modalStyles = {
  width: "80%",
  height: "80%",
};

const divStyles = {
  width: "80%",
};

export default AddLogModal;
