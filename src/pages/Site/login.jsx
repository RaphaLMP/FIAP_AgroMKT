import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    cpf: '',
    senha: '',
  });

  const [userCadastro, setUserCadastro] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserCadastro(user);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const cleanFields = () => {
    setUserLogin({
      cpf: '',
      senha: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userLogin.cpf === userCadastro.cpf && userLogin.senha === userCadastro.senha) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bem vindo de volta!",
        showConfirmButton: false,
        timer: 1700
      }).then(() => {
        cleanFields();
        localStorage.setItem("isLoggedIn", "true");
        navigate("/tela_usuario");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "CPF ou senha incorretos!",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex items-center justify-center bg-white w-full sm:w-5/6 md:w-2/3 xl:w-1/3 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col w-full xl:w-10/12 mx-auto bg-white p-6 rounded-lg">
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-center">Entre na sua conta</h3>
          </div>

          <Input
            labelInput={"Digite o CPF"}
            placeholderText={"000.000.000-00"}
            Inputname="cpf"
            value={userLogin.cpf}
            onChange={handleChange}
          />
          <Input
            labelInput={"Digite a senha"}
            placeholderText={"*********"}
            type={"password"}
            Inputname={"senha"}
            value={userLogin.senha}
            onChange={handleChange}
          />

          <div className="flex justify-end">
            <p><a className="text-sm" href="#">Esqueci minha senha</a></p>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg mt-4 hover:bg-indigo-700 text-center"
          >
            Login
          </button>

          <div className="flex items-center text-center justify-between mt-6">
            <div className="border w-1/4"></div>
            <p className="text-sm">Entre com a sua conta Google</p>
            <div className="border w-1/4"></div>
          </div>

          <a
            href="https://accounts.google.com/v3/signin/identifier?..."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border p-2 mt-4"
          >
            <div className="flex items-center space-x-2">
              <img src="images/google.png" alt="Google" className="w-5 h-5" />
              <p className="text-sm text-gray-600">Google</p>
            </div>
          </a>

          <div className="flex justify-center mt-6 text-xs">
            <p>Não tem uma conta? <a href="./cadastro" className="font-bold text-indigo-600">crie uma</a></p>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex bg-cover bg-center w-9/12 h-full" style={{ backgroundImage: "url('images/agricultura.jpg')" }}></div>
    </div>
  );
};

export default Login;
