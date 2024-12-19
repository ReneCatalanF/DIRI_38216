import React from 'react';

const Header_1: React.FC = (props) => {
    return (
        <div className="header">
            <div className="menuIcon">
              <div className="dashTop"></div>
              <div className="dashBottom"></div>
              <div className="circle"></div>
            </div>
            <h2>{props.tituloo}</h2>
            <input
              type="text"
              className="searchInput"
              placeholder="Buscar ..."
            />
            <div className="fa fa-search searchIcon"></div>
          </div>
    )
}

export default Header_1