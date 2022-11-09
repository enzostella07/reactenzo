import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/sinusar/Checkout";
import Contacto from "./components/sinusar/Contacto";
import ItemListContainer from "./components/ItemListContainer";
import Navmui from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Navmui />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
