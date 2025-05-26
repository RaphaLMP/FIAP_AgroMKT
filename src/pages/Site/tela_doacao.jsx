import React from "react";
import '../../styles/app.css';
import BackToTop from "../../components/backtotop";
import Footer from "../../components/footer";

const Tela_Doacao = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Logo Animado (Movido para o lado direito) */}
      <div className="fixed top-8 right-8 z-10 bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-lg shadow-lg animate-pulse">
        <p className="text-white font-bold text-xl">
          Evite <br /> Desperdício
        </p>
      </div>

      {/* Seção Principal */}
      <section className="container mx-auto my-12 flex flex-col items-center text-center px-4">
        <h2 className="text-3xl font-bold">Doação entre Agricultores</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Compartilhe seus produtos ou receba doações para evitar desperdício e apoiar a comunidade de pequenos agricultores.
        </p>
        <div className="flex justify-center mt-6">
          <a href="#quem-quer-doar" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md mx-2 transition duration-300">
            QUERO DOAR
          </a>
          <a href="#cadastro-doador" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md mx-2 transition duration-300">
            QUERO RECEBER
          </a>
        </div>
      </section>

      {/* Linha de Separação Ondulada */}
      <div className="w-full h-6 bg-gradient-to-r from-green-400 to-blue-400 my-4 relative overflow-hidden"></div>

      {/* Seção Receber Doações */}
      <section id="cadastro-doador" className="container mx-auto my-12 flex flex-col md:flex-row items-center px-4">
        {/* Formulário à Esquerda */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-center text-green-600">Cadastro para Receber Doações</h2>
          <p className="text-center text-gray-600 mb-6">
            Preencha as informações abaixo para se cadastrar como receptor de doações na plataforma Agromarket.
          </p>

          <div className="max-w-md mx-auto">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    placeholder="Digite seu nome"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    placeholder="Digite seu telefone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email1" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email1"
                  placeholder="Digite seu e-mail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email2" className="block text-sm font-medium text-gray-700 mb-1">Confirme o seu E-mail</label>
                <input
                  type="email"
                  id="email2"
                  placeholder="Digite seu e-mail novamente"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="bairro" className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                  <input
                    type="text"
                    id="bairro"
                    placeholder="Digite seu bairro"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="uf" className="block text-sm font-medium text-gray-700 mb-1">UF</label>
                  <select
                    id="uf"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="" disabled selected>Selecione seu estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                  <select
                    id="cidade"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="" disabled selected>Selecione sua cidade</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="produtos" className="block text-sm font-medium text-gray-700 mb-1">Produtos de Interesse</label>
                <textarea
                  id="produtos"
                  rows="3"
                  placeholder="Informe os produtos que você gostaria de receber como doação"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              >
                Cadastrar para Receber
              </button>
            </form>
          </div>
        </div>

        {/* Imagem à Direita */}
        <div className="w-full md:w-1/2 text-center">
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
            <img
              src="images/frutaruim.jpeg"
              alt="Imagem "
              className="max-w-full h-auto rounded-lg mx-auto shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Linha de Separação Ondulada */}
      <div className="w-full h-6 bg-gradient-to-r from-blue-400 to-green-400 my-4 relative overflow-hidden"></div>

      {/* Seção para Quem Quer Doar */}
      <section id="quem-quer-doar" className="container mx-auto my-12 flex flex-col md:flex-row items-center px-4">
        {/* Imagem à Esquerda */}
        <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg">
            <img
              src="images/tomates.jpeg"
              alt="Imagem de doação"
              className="max-w-full h-auto rounded-lg mx-auto shadow-lg"
            />
          </div>
        </div>

        {/* Formulário à Direita */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center text-blue-600">Cadastro para Quem Quer Doar</h2>
          <p className="text-center text-gray-600 mb-6">
            Preencha as informações abaixo para cadastrar os produtos que deseja doar na plataforma Agromarket.
          </p>

          <div className="max-w-md mx-auto">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="nomeDoador" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="nomeDoador"
                    placeholder="Digite seu nome"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="telefoneDoador" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="telefoneDoador"
                    placeholder="Digite seu telefone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="emailDoador1" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="emailDoador1"
                  placeholder="Digite seu e-mail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="emailDoador2" className="block text-sm font-medium text-gray-700 mb-1">Confirme o seu E-mail</label>
                <input
                  type="email"
                  id="emailDoador2"
                  placeholder="Digite seu e-mail novamente"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="bairroDoador" className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                  <input
                    type="text"
                    id="bairroDoador"
                    placeholder="Digite seu bairro"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="ufDoador" className="block text-sm font-medium text-gray-700 mb-1">UF</label>
                  <select
                    id="ufDoador"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled selected>Selecione seu estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="cidadeDoador" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                  <select
                    id="cidadeDoador"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled selected>Selecione sua cidade</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="instrucoes" className="block text-sm font-medium text-gray-700 mb-1">Instruções para Entrega</label>
                <textarea
                  id="instrucoes"
                  rows="3"
                  placeholder="Informe detalhes para a entrega, como horário e local"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Cadastrar Doação
              </button>
            </form>
          </div>
        </div>
      </section>
      <BackToTop />
      <Footer />
    </div>

  );
};

export default Tela_Doacao;