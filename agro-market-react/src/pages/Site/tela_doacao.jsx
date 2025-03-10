import React from "react";
import '../../styles/app.css';

const Tela_Doacao = () => {
  return (
    <div className="tela-doacao-container">
      <h3 className="text-center text-2xl font-semibold mb-6">Faça sua Doação</h3>
      
      <div className="form-group mb-4">
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome completo</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite o seu nome"
          className="form-control py-3 px-4 border border-gray-300 rounded-lg mt-2 w-full"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="valor" className="block text-sm font-medium text-gray-700">Valor da Doação</label>
        <input
          id="valor"
          type="number"
          placeholder="Digite o valor"
          className="form-control py-3 px-4 border border-gray-300 rounded-lg mt-2 w-full"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="comentario" className="block text-sm font-medium text-gray-700">Comentário (Opcional)</label>
        <textarea
          id="comentario"
          placeholder="Deixe um comentário"
          className="form-control py-3 px-4 border border-gray-300 rounded-lg mt-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 px-4 rounded-lg mt-4 w-full"
      >
        Realizar Doação
      </button>
      
    </div>
  );
};

export default Tela_Doacao;
