import React, { useState, useEffect } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const goToPage = (path) => {
    navigate(path);
  };

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      const contactSection = document.getElementById('faleConosco');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/?scrollTo=faleConosco');
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scrollTo = queryParams.get('scrollTo');

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [location]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => goToPage("/")}
          >
            <img className="h-8 w-auto" src="images/campos.png" alt="Logo" />
            <span className="text-lg font-semibold">Agromarket</span>
          </div>

          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <NavLink to="/" className="hover:text-gray-300">Início</NavLink>
            <NavLink to="/tela_doacao" className="hover:text-gray-300">Doação</NavLink>
            <a
              href="#faleConosco"
              className="hover:text-gray-300"
              onClick={handleContactClick}
            >
              Contato
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn && location.pathname !== "/perfil" && (
              <button className="relative p-2 rounded-full hover:bg-gray-800">
                <i className="bi bi-bell-fill text-white text-lg"></i>
              </button>
            )}

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => navigate("/perfil")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Perfil
                    </button>
                    <button
                      onClick={() => navigate("/tela_usuario")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Vendas
                    </button>
                    <button
                      onClick={() => navigate("/tela_doacao")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Doações
                    </button>
                    <button
                      onClick={() => navigate("/configuracoes")}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Configurações
                    </button>
                    <div className="border-t"></div>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        localStorage.setItem("isLoggedIn", "false");
                        navigate("/login");
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => goToPage("/login")}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                >
                  Entrar
                </button>
                <button
                  onClick={() => goToPage("/cadastro")}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
                >
                  Cadastro
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
