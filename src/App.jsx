import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ContextContainer from "./components/ContextContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navmui from "./components/Navbar";

export default function App() {
  return (
    <div>
      <ContextContainer>
        <BrowserRouter>
          <Navmui />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemid" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </ContextContainer>
    </div>
  );
}
