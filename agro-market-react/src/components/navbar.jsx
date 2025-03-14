import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => goToPage("/")}> 
            <img className="h-8 w-auto" src="images/campos.png" alt="Logo" />
            <span className="text-lg font-semibold">Agromarket</span>
          </div>
          
          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="hover:text-gray-300">Início</a>
            <a href="/tela_doacao" className="hover:text-gray-300">Doação</a>
            <a href="#" className="hover:text-gray-300">Contato</a>
          </div>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn && (
              <button className="relative p-2 rounded-full hover:bg-gray-800">
                <i className="bi bi-bell-fill text-white text-lg"></i>
              </button>
            )}
            
            {isLoggedIn ? (
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none z-1">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Perfil</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Configurações</a>
                  <div className="border-t"></div>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="block px-4 py-2 text-left w-full hover:bg-gray-200"
                  >
                    Sair
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => goToPage("/login")}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
              >
                Entrar
              </button>
            )}
            
            <button
              onClick={() => goToPage("/cadastro")}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
            >
              Cadastro
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
