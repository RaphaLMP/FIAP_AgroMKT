import React, { useEffect, useState } from "react";
import Input from "../../components/input";
import Swal from 'sweetalert2'
import {useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))

  })

  
  const [user, setUser] = useState({
    nome: '',
    cpf: '',
    nascimento: '',
    email: '',
    telefone: '',
    senha: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sua conta foi criada com sucesso!",
      showConfirmButton: false,
      timer: 1700
    }).then(() => {
      navigate("/login");

    });
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-center w-full sm:w-5/6 md:w-2/3 xl:w-1/3 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col w-full xl:w-10/12 mx-auto  bg-white p-6 rounded-lg sm:shadow-lg lg:shadow-none">
          <h3 className="text-center text-2xl font-semibold mb-4">Crie sua conta</h3>
          <Input
            onChange={handleChange}
            Inputname={"nome"}
            inputType={"text"}
            labelInput={"Nome Completo"}
            placeholderText={"Digite o seu nome"}
          />
          <Input
            onChange={handleChange}
            Inputname={"cpf"}
            inputType={"text"}
            labelInput={"CPF"}
            placeholderText={"000.000.000-00"}
          />
          <Input
            onChange={handleChange}
            Inputname={"nascimento"}
            inputType={"date"}
            labelInput={"Data de Nascimento"}
          />
          <Input
            onChange={handleChange}
            Inputname={"email"}
            inputType={"email"}
            labelInput={"E-mail"}
          />
          <Input
            onChange={handleChange}
            Inputname={"telefone"}
            inputType={"tel"}
            labelInput={"Telefone"}
          />
          <Input
            onChange={handleChange}
            Inputname={"senha"}
            inputType={"password"}
            labelInput={"Senha"}
          />

          <button
          
            href="tela_usuario"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg mt-4 hover:bg-indigo-700 text-center"
          >
            Criar
          </button>

          <div className="flex items-center justify-between mt-6">
            <div className="border w-16"></div>
            <p className="text-sm text-gray-600">Entre com o Google</p>
            <div className="border w-16"></div>
          </div>

          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://accounts.google.com/v3/signin/identifier?elo=1&ifkv=AcMMx-eFwoPeTxwX9r3nI32xbXBDbkIfSvm0X0Tva1jTwyNI73aL6ZGHfVuJ83iwkEqJbmdWg535XQ&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1"
          >
            <div className="flex items-center justify-center border p-2 mt-4">
              <div className="flex items-center space-x-2">
                <img src="images/google.png" alt="Google" className="w-5 h-5" />
                <p className="text-sm text-gray-600">Google</p>
              </div>
            </div>
          </a>

          <div className="flex justify-center mt-6 text-xs">
            <a href="./login" className="text-blue-600">
              Já possuo uma conta
            </a>
          </div>
        </form>
      </div>
      <div
        className="hidden lg:flex w-9/12"
        style={{
          backgroundImage: "url('/images/agricultura.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      ></div>
    </div>
  );
};

export default Cadastro;
