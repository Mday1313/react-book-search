import React from "react";
import "./style.css";



export function List({ children }) {
  return (
    <div className="list-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item list-group-item-light">{children}</li>;
}
