import { Button } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextoGeneral } from "../components/ContextContainer";

export default function Checkout() {
  const { totalToPay, carrito, clear } = useContext(contextoGeneral);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [terminoPedido, setTerminoPedido] = useState(false);

  function validateEmail(email) {
    var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) {
      return false;
    }
    return true;
  }

  const handleClickPedido = () => {
    const pedido = {
      comprador: { name, email, tel },
      items: carrito.map((product) => ({
        name: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
    };

    const db = getFirestore();
    const pedidos = collection(db, "Pedidos");

    if (tel.length <= 9) {
      alert("Escriba bien su numero")
      return
    }
    if (name.length < 2) {
      alert("escriba bien su nombre");
      return;
    }
    if (validateEmail(email) == false) {
      alert("escriba bien su email");
      return;
    }
    addDoc(pedidos, pedido).then(({ id }) => {
      console.log(id);
      setTerminoPedido(true);
      clear();
      //   carrito.forEach(item => {
      //     const documento = doc(db, "productos", item.id);
      //     updateDoc(documento, { quantity: increment(-item.quantity) });
      // });
    });
  };

  return (
    <div>
      {terminoPedido ? (
        <>
          <p style={{backgroundColor:"black", color:"yellow"}}> El pedido fue creado... gracias por su compra</p>
          <Button>
            <Link to={"/"}>Volver al inicio</Link>
          </Button>
        </>
      ) : (
        <div className="formulario" style={{backgroundColor:"black"}}>
          <h1 style={{color:"yellow", textDecoration:"underline"}}>Total a pagar USD ${totalToPay} </h1>
          <form action="" >
            <input
              type="text"
              placeholder="Nombre..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Email..."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="Telefono..."
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />

            <Button onClick={handleClickPedido} style={{backgroundColor:"lightblue"}} >Confirmar</Button>
          </form>
        </div>
      )}
    </div>
  );
}
