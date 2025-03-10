import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Importando o Router
import Site from "./pages/Site";  // Importando o componente Site


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Site />  {/* O componente Site é renderizado */}
  </BrowserRouter>
);
