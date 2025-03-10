import React from "react";
import '../../styles/app.css'; // Caminho correto para o arquivo


const Cadastro = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center bg-white w-full lg:w-1/2 xl:w-1/3 p-6 rounded-lg shadow-md">
        <form id="forms" className="flex flex-col w-10/12 md:w-7/12 xl:w-9/12">
          <div className="p-4">
            <div className="container-fluid flex items-center justify-center p-4">
              <h3 className="text-center text-2xl font-semibold">Crie sua conta</h3>
            </div>
            <a
              className="text-decoration-none"
              target="_blank"
              href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&service=accountsettings&ifkv=AcMMx-eRmZUdwIgQzNrnajmP_fkVWBLmt4DS3zQ_LZ61lc7LCtgwVrb157gQ7di9IjoB34GP30ja&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            >
              {/* Google Sign-in Button */}
            </a>
            <div className="mb-2">
              <label className="form-label text-sm">Nome completo</label>
              <input
                placeholder="Digite o seu nome completo"
                id="nome"
                className="form-control py-2 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-sm">Digite o CPF</label>
              <input
                required
                id="cpf"
                placeholder="000.000.000-00"
                className="form-control py-2 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-sm">Data de nascimento</label>
              <input
                required
                type="date"
                id="data"
                placeholder="//_"
                className="form-control py-2 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-sm">E-mail</label>
              <input
                required
                id="email"
                type="email"
                placeholder="Digite o seu e-mail"
                className="form-control py-2 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-sm">Telefone</label>
              <input
                required
                id="telefone"
                type="tel"
                placeholder="Digite o telefone"
                className="form-control py-2 px-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-sm">Senha</label>
              <input
                required
                id="senha"
                type="password"
                placeholder="Digite a sua senha"
                className="form-control py-2 px-4 border border-gray-300 rounded-lg"
              />
            </div>

            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full">
              Criar
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="border w-16"></div>
            <p>Ou crie sua conta com o Google</p>
            <div className="border w-16"></div>
          </div>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://accounts.google.com/v3/signin/identifier?elo=1&ifkv=AcMMx-eFwoPeTxwX9r3nI32xbXBDbkIfSvm0X0Tva1jTwyNI73aL6ZGHfVuJ83iwkEqJbmdWg535XQ&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1"
          >
            <div className="col-12 flex items-center justify-center border p-2 mt-2">
              <div className="flex justify-between w-full">
                <img src="images/google.png" className="w-5 h-5" alt="Google" />
                <p className="text-sm text-gray-500">Google</p>
              </div>
            </div>
          </a>
          <div className="flex justify-center mt-4 text-xs">
            <a href="./login.html" className="text-blue-600">
              Já possuo uma conta
            </a>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex w-1/2 h-full" style={{ backgroundImage: "url('/images/agricultura.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}></div>

    </div>
  );
};

export default Cadastro;
