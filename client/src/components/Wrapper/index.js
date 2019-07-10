import React from "react";
import Form from "../Form";
import Result from "../Result"
import "./style.css";

function Wrapper(props) {
    return (
        <div className="container">
           <Form/>
           <Result />
        </div>
    
    );
}

export default Wrapper;