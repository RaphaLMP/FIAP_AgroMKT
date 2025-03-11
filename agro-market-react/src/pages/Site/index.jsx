import React from "react";
import { Routes, Route } from "react-router-dom";
import '../../styles/index.css';
import 'flowbite';

import Navbar from "../../components/navbar";
import Chatbot from "../../components/chatbot";
import Home from "./home";
import Cadastro from "./cadastro";
import Login from "./login";
import Tela_Doacao from "./tela_doacao";
import Tela_Usuario from "./tela_usuario";

const Site = () => {

  return (
    <div>
      <Navbar />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
        <Route path="tela_doacao" element={<Tela_Doacao />} />
        <Route path="tela_usuario" element={<Tela_Usuario />} />
        {/* Outras rotas podem ser definidas aqui */}
      </Routes>
    </div>
  );
};

export default Site;
