import React from 'react';
import {connect} from 'react-redux';
import {deleteLog, setCurrent} from '../../actions/logActions';
// import Moment from 'react-moment';
import PropTypes from 'prop-types';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  
  const delFunc = () => {
    deleteLog(log.id);
  }

  return (
    <li className='collection-item left-align'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment> */}
        </span>
        <a href='#!' onClick={delFunc}  className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default connect(null, {deleteLog, setCurrent})(LogItem);