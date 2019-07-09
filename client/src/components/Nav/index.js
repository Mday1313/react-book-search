import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-img">
        <div className="nav-tags">
        <div className="title">React Google Book Search</div>
        <div className="row">
        <div className="col-4 search">Search</div>
        <div className="col-4 save">Save</div>
        <div className="col-4"></div>
       
        </div>
        </div>
        {/* <div>Search</div> */}
      
    </nav>
  );
}

export default Nav;