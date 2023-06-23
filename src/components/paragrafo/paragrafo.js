import React from "react";
import "./paragrafo.css";

const Paragrafo = (props) => {
  return <p className="paragrafo">{props.p.toUpperCase()}</p>;
};

export default Paragrafo;
