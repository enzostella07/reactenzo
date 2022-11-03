import React from "react";
import "../App.css";

export default function ItemListContainer({ greeting }) {
  return (
    <div className="divgreeting">{greeting ? <p className="parrafo">Bienvenide</p> : <p>No sos bienvenide</p>}</div>
  );
}
