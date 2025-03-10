import React from "react";
import '../../styles/app.css'; // Caminho correto para o arquivo


const Cadastro = () => {
  return (
    <div className="flex items justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center bg-white w-full lg:w-1/2 xl:w-1/3 p-6 rounded-lg shadow-md">
      <form id="forms" className="flex flex-col w-full md:w-8/12 lg:w-7/12 xl:w-10/12 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-center text-2xl font-semibold mb-4">Crie sua conta</h3>
      
      <div className="mb-1">
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome completo</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite o seu nome completo"
          className="form-control py-3 px-4 border border-gray-300 rounded-lg mt-2 w-full"
        />
      </div>

      <div className="mb-1">
        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">Digite o CPF</label>
        <input
          required
          id="cpf"
          placeholder="000.000.000-00"
          className="form-control py-3 px-4 border border-gray-300 rounded-lg mt-2 w-full"
        />
      </div>

      <div className="mb-1">
        <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data de nascimento</label>
        <input
          required
          type="date"
          id="data"
          className="form-control py-3 px-4 border border-gray-300 rounded-lg mt-2 w-full"
        />
      </div>

      <div className="mb-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
        <input
          required
          id="email"
          type="email"
          placeholder="Digite o seu e-mail"
          className="form-control py-3 px-4 border border-gray-300 rounded-lg mt-2 w-full"
        />
      </div>

      <div className="mb-1">
        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
        <input
          required
          id="telefone"
          type="tel"
          placeholder="Digite o telefone"
          className="form-control py-3 px-4 border border-gray-300 rounded-lg mt-2 w-full"
        />
      </div>

      <div className="mb-1">
        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
        <input
          required
          id="senha"
          type="password"
          placeholder="Digite a sua senha"
          className="form-control py-3 px-4 border border-gray-300 rounded-lg mt-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 px-4 rounded-lg mt-4 w-full"
      >
        Criar
      </button>

      <div className="flex items-center justify-between mt-6">
        <div className="border w-16"></div>
        <p className="text-sm text-gray-600">Ou crie sua conta com o Google</p>
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
      <div className="hidden lg:flex w-9/12" style={{ backgroundImage: "url('/images/agricultura.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}></div>

    </div>
  );
};

export default Cadastro;
