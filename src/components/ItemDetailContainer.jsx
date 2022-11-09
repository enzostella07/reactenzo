import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../data/data.json";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [arrayDetail, setArrayDetail] = useState([]);
  const { itemid } = useParams();

  useEffect(() => {
    const getData = new Promise((res) => {
      setTimeout(() => {
        res(Data);
      }, 1000);
    });

    getData
    .then((res) =>
    setArrayDetail(res.find((Data) => Data.id === parseInt(itemid)))
    );
  }, [itemid]);

  return <ItemDetail data={arrayDetail} />;
}
