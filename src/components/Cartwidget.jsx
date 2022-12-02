import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function Cartwidget({ cant }) {
  return (
    <Link to= "/cart">
      <ShoppingCartIcon style={{color:"yellow"}} />
      {cant}
    </Link>
  );
}
