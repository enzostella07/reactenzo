import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function ItemCount({ onAdd, max, ini }) {
  const [count, setCount] = useState(ini);
  const restar = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <Card sx={{ padding: "40px" }}>
        <Grid container justifyContent="center" alignItems="center">
          <button onClick={restar}>-</button>
          {count}
          <button onClick={sumar}>+</button>
          <button onClick={() => onAdd(count)}>AGREGAR</button>
        </Grid>
      </Card>
    </div>
  );
}
