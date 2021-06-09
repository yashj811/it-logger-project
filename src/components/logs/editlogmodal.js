import { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  useEffect(() => {
      if(current){
       setMessage(current.message);
       setTech(current.tech);
       setAttention(current.attention);
      }
  }, [current])

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please fill the details !!" });
    } else {
      const newLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      console.log(newLog);
      updateLog(newLog);
      M.toast({ html: `Log is edited by ${tech}` });

      setAttention(false);
      setMessage('');
      setTech('');
    }
  };

  return (
    <Fragment>
      <div id="edit-log-modal" className="modal" style={modalStyles}>
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
              Update Log
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

const mapStateToProps = state => ({
    current : state.log.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModal);
