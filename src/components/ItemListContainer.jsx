import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let miCollection;

    if (categoryid == undefined) {
      miCollection = collection(db, "productos");
    } else {
      miCollection = query(
        collection(db, "productos"),
        where("category", "==", categoryid)
        );
      }

      getDocs(miCollection).then((data) => {
        const auxProductos = data.docs.map((producto) => ({
          ...producto.data(),
          id: producto.id,
        }));

        setArrayDeProductos(auxProductos);
      });
  }, [categoryid]);
  
  return (
    <>
      <ItemList items={arrayDeProductos} />
    </>
  );
}
