import {
  Card, CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
import React, { useContext } from "react";
import { contextoGeneral } from "../components/ContextContainer";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  const { addItem } = useContext(contextoGeneral);
  const onAdd = (cant)=> {
    addItem(producto, cant)
  }
  return (
    <>
      <Card sx={{ padding: "40px" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sm={12} md={6}>
            <CardMedia
              component="img"
              image={producto.pictureURL}
              alt="Batman Toys"
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <CardContent>
              <Typography
                variant="h3"
                color="initial"
                sx={{ textAlign: "center", padding: "20px" }}
              >
                {producto.title}
              </Typography>
              <Typography
                variant="h4"
                color="initial"
                sx={{ textAlign: "center" }}
              >
                USD ${producto.price}
              </Typography>
              <Typography
                variant="subtitle1"
                color="initial"
                sx={{ textAlign: "center", padding: "20px" }}
              >
                {producto.description}
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                variant="subtitle1"
                color="initial"
                sx={{ textAlign: "center" }}
              >
                Stock disponible: {producto.quantity}
              </Typography>
            </CardContent>
              <ItemCount ini={1} max={producto.quantity} onAdd={onAdd} />
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
