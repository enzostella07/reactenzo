import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../data/data.json";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryid } = useParams();
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  useEffect(() => {
    let getData = new Promise((res) => {
      setTimeout(() => {
        res(Data);
      }, 1000);
    });

    getData
    .then((res) => {
      if (categoryid) {
        setArrayDeProductos(res.filter((item) => item.category == categoryid));
      } else {
        setArrayDeProductos(res);
      }
    });
  }, [categoryid]);

  return (
    <>
      <ItemList items={arrayDeProductos} />
    </>
  );
}
