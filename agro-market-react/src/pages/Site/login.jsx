import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      
      <div className="flex items-center justify-center bg-white w-full md:w-1/2 xl:w-1/3 p-6">
      <form className="flex flex-col w-10/12 md:w-1/2 xl:w-10/12 mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-center">Entre na sua conta</h3>
      </div>
      
      <div className="mb-4">
        <label htmlFor="cpf" className="block text-sm font-medium">CPF</label>
        <input
          id="cpf"
          type="text"
          placeholder="Digite o CPF"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="senha" className="block text-sm font-medium">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite a senha"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      <div className="flex justify-end text-xs">
        <p><a href="#">Esqueci minha senha</a></p>
      </div>

      <a
        href="tela_usuario"
        className="w-full bg-indigo-600 text-white p-3 rounded-lg mt-4 hover:bg-indigo-700 text-center"
      >
        Login
      </a>

      <div className="flex items-center justify-between mt-6">
        <div className="border w-1/4"></div>
        <p className="text-sm">Ou faça login com a sua conta Google</p>
        <div className="border w-1/4"></div>
      </div>

      <div className="flex items-center justify-center border p-2 mt-4">
        <div className="flex items-center space-x-2">
          <img src="images/google.png" alt="Google" className="w-5 h-5" />
          <p className="text-sm text-gray-600">Google</p>
        </div>
      </div>

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
