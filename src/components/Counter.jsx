import React, { useContext } from "react";
import { contextoGeneral } from "../components/ContextContainer";

export default function Counter() {
  const { carrito } = useContext(contextoGeneral);
  const cartCount = [...carrito];

  return (
    <>
      {/* <>{JSON.stringify(cartCount)}</> */}

      <div className="count-container">
        <div className="count">
          <button className="btn-less">
            <b>-</b>
          </button>
          <span>
            <b>{}</b>
          </span>
          <button className="btn-add">
            <b>+</b>
          </button>
        </div>
      </div>
    </>
  );
}
