import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Login imediato sem simulação de demora
    localStorage.setItem("isLoggedIn", "true");
    
    // Marca como logado para renderizar o redirecionamento
    setIsLoggedIn(true);
  };

  // Se estiver logado, renderiza o componente com o redirecionamento
  if (isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white p-8">
        <h2 className="text-2xl font-semibold mb-4">Login realizado com sucesso!</h2>
        <p className="mb-6">Você será redirecionado em instantes...</p>
        <Link 
          to="/tela_usuario" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          onClick={() => {
            // Forçar redirecionamento via JavaScript como fallback
            setTimeout(() => {
              window.location.href = "/tela_usuario";
            }, 100);
          }}
        >
          Ir para Tela do Usuário
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex items-center justify-center bg-white w-full sm:w-5/6 md:w-2/3 xl:w-1/3 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col w-full xl:w-10/12 mx-auto bg-white p-6 rounded-lg">
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-center">Entre na sua conta</h3>
          </div>
          <Input labelInput={"Digite o CPF"} placeholderText={"000.000.000-00"} />
          <Input labelInput={"Digite a senha"} placeholderText={"*********"} type="password" />

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
            href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26sl%3Dtrue&ifkv=AXH0vVtgHsKN3Z2s5y8WXGt_KccStlbkmZUfw7dDN_j6z4cx-Dd2YOT-FH7Uyrz3K-s3hrxYfuaAkw&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S137917034%3A1741910754376206"
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