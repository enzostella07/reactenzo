import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { itemid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "productos", itemid)

    getDoc(refDoc).then((item) => {
      const aux = {
        ...item.data(),
        id: item.id,
      }
      setProducto(aux);
    });
  }, [itemid]);

  return (
    <div>
      <ItemDetail producto={producto} />;
    </div>
  );
}
