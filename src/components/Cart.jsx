import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Link } from "react-router-dom";
import { contextoGeneral } from "../components/ContextContainer";

export default function Cart() {
  const { carrito, removeItem, clear, totalToPay, defaultUserData } =
    React.useContext(contextoGeneral);
  const cartAux = [...carrito];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      {carrito.length ? (
        <>
          <h1 style={{ backgroundColor: "yellow", width: "17%" }}>
            Tus Batiproductos 🦇
          </h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Muñeco</StyledTableCell>
                  <StyledTableCell align="center">Nombre</StyledTableCell>
                  <StyledTableCell align="center">Descripcion</StyledTableCell>
                  <StyledTableCell align="center">Cantidad</StyledTableCell>
                  <StyledTableCell align="center">
                    Precio unitario
                  </StyledTableCell>
                  <StyledTableCell align="center">Importe</StyledTableCell>
                  <StyledTableCell align="center">
                    Eliminar producto
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartAux.map((item) => (
                  <StyledTableRow key={item.title}>
                    <StyledTableCell component="th" scope="row">
                      <img
                        style={{ width: "400px", height: "500px" }}
                        src={`${item.pictureURL}`}
                        alt={item.title}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">{`${item.quantity} unidades`}</StyledTableCell>
                    <StyledTableCell align="center">{`$${item.price}`}</StyledTableCell>
                    <StyledTableCell align="center">{`$${
                      item.price * item.quantity
                    }`}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Chip
                        label="Eliminar"
                        onClick={() => removeItem(item.id)}
                        onDelete={() => removeItem(item.id)}
                        deleteIcon={<DeleteIcon />}
                        variant="outlined"
                        style={{ backgroundColor: "red" }}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell align="right" colSpan={3}>
                    <h2>Subtotal a abonar:</h2>
                  </TableCell>
                  <TableCell align="right">
                    {cartAux.length ? <h2>USD$ {totalToPay}</h2> : <>$0</>}
                  </TableCell>
                  <>
                    {cartAux.length ? (
                      <Button
                        onClick={() => clear()}
                        style={{
                          color: "black",
                          backgroundColor: "red",
                          fontWeight: "bold",
                          fontSize: "15px",
                          padding: "15px",
                          margin: "20px 0 0 0",
                          borderRadius: "30px",
                        }}
                      >
                        VACIAR CARRITO
                      </Button>
                    ) : (
                      ""
                    )}
                  </>
                  <>
                    {cartAux.length ? (
                      <Button>
                        <Link
                          style={{
                            color: "yellow",
                            backgroundColor: "green",
                            fontWeight: "bold",
                            fontSize: "15px",
                            padding: "15px",
                            margin: "20px 0 0 0",
                            borderRadius: "30px",
                            textDecoration: "none",
                          }}
                          to="/checkout"
                          onClick={() => defaultUserData()}
                        >
                          Ir a pagar
                        </Link>
                      </Button>
                    ) : (
                      ""
                    )}
                  </>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <div style={{backgroundColor:"grey"}}>
          <Grid
            container
            direction="column"
            alignItems="center"
            padding="40px"
            spacing={5}
          >
            <Grid item>
              <Typography
                variant="h3"
                color="initial"
                sx={{ textAlign: "center" }}
                style={{
                  backgroundColor:"grey",
                  padding: "15px",
                  margin: "20px 0 0 0",
                  borderRadius: "30px",
                }}
              >
                No hay elementos en tu Baticarrito...
              </Typography>
            </Grid>

            <Grid item>
              <Link to={`/`} style={{ textDecoration: "none" }}>
                <Button variant="contained">Hacer compras</Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}
