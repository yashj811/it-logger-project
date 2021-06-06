import React, {Fragment} from 'react';

const SearchBar = () => {
    return <Fragment>
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" htmlFor="search"><i className="material-icons">Search</i></label>
            <i className="material-icons">Close</i>
          </div>
        </form>
      </div>
    </nav></Fragment>
}

export default SearchBar;