import React, { createContext, useEffect, useState } from "react";
export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("cart"))|| []);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [adress, setAdress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [orderCreated, setOrderCreated] = useState('');

  const [totalToPay, setTotalToPay] = useState(0);

  const posInCart = (id) => {
    const pos = carrito.findIndex((item) => item.id === id);
    return pos;
  };
  
  const addItem = (item, quantity) => {
    const pos = posInCart(item.id);
    if (pos === -1) {
      setCarrito([...carrito, { ...item, quantity }]);
    } else {
      const carritoAux = [...carrito];
      carritoAux[pos] = {
        ...carritoAux[pos],
        quantity: carritoAux[pos].quantity + quantity,
      };
      setCarrito(carritoAux);
    }
  };
  
  const removeItem = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };
  
  const clear = () => {
    setCarrito([]);
  };
  
  useEffect(() => {
    const total = carrito.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
      );
      setTotalToPay(total);
    }, [carrito]);

     useEffect(() => {
       localStorage.setItem(`cart`, JSON.stringify(carrito));
     },[carrito]);


    const defaultUserData = () => {
      setName('');
      setSurname('');
      setEmail('');
      setTel('');
      setAdress('');
      setPostalCode('');
      setOrderCreated('');
    };


  return (
    <div>
      <contextoGeneral.Provider
        value={{
          carrito,
          addItem,
          removeItem,
          clear,
          defaultUserData,
          totalToPay
        }}
      >
        {children}
      </contextoGeneral.Provider>
    </div>
  );
}
