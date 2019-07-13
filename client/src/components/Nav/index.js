import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-img">
        <div className="nav-tags">
        <div className="title">React Google Book Search</div>
        <div className="row">
        <a className="nav-link col-4 search" href="/">Search</a>
        <a className="nav-link col-4 save" href="/saved">Save</a>
        <div className="col-4"></div>
       
        </div>
        </div>
      
      
    </nav>
  );
}

export default Nav;