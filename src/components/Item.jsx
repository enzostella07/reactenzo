import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Item({ products }) {
  return (
    <>
    <div>
      <p> </p>
    </div>
      <Card className="cards" style={{ backgroundColor: "black", border: "2px solid yellow", margin: "10px"  }}>
        <CardHeader
          title={products.title}
          sx={{ textAlign: "center" }}
          style={{ color: "yellow"}}
        />
        <CardMedia
          component="img"
          image={products.pictureURL}
        />
        <CardContent>
          <Typography
            variant="h5"
            sx={{ textAlign: "center" }}
            style={{ backgroundColor: "yellow" }}
          >
            USD ${products.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button>
            <Link to={`/item/${products.id}`} style={{ color: "yellow"}}>
              <div className="boton">Ver Detalle</div>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
