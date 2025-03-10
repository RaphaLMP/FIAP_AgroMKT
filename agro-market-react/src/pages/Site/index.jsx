import React from "react";
import { Routes, Route } from "react-router-dom";
import '../../styles/index.css';
import 'flowbite';

import Home from "./home";
import Cadastro from "./cadastro";
import Login from "./login";
import Navbar from "../../components/navbar";

const Site = () => {
  console.log("Componente Site renderizado!");

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        {/* Outras rotas podem ser definidas aqui */}
      </Routes>
    </div>
  );
};

export default Site;
