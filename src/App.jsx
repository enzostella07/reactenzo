import React from "react"; //! Archivos .jsx siempre va la importacion de react
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import ItemListContainer from "./components/Itemlistcontainer";
import Navmui from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navmui />
      <ItemListContainer greeting={true} color={"#00FF00"} />
    </div>
  );
}
