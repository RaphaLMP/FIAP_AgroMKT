import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [showModal, setShowModal] = useState(false); // Controla a visibilidade do modal

  // Função para adicionar mensagem do usuário e bot
  const sendMessage = () => {
    if (userMessage.trim() !== "") {
      const newMessages = [...messages, { text: userMessage, sender: 'user' }];
      setMessages(newMessages);
      setUserMessage('');

      // Simula resposta do bot
      const botResponse = { text: `Você escreveu: ${userMessage}. Como posso te ajudar mais?`, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }
  };

  // Função para lidar com a seleção de mensagens iniciais
  const sendInitialMessage = (message) => {
    const newMessages = [
      ...messages,
      { text: message, sender: 'user' },
      { text: `Você selecionou: ${message}. Como posso te ajudar mais?`, sender: 'bot' }
    ];
    setMessages(newMessages);
  };

  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      {/* Botão para abrir o chat */}
      <div
        className="fixed bottom-24 right-5 cursor-pointer z-50"
        onClick={openModal}
      >
        <img src="images/bate-papo.png" alt="Ícone para abrir modal" className="w-12 h-12" />
      </div>

      {/* Modal do Chat */}
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="modal-content bg-white p-6 rounded-lg w-[80%] md:w-[600px]" // A largura foi aumentada
            onClick={(e) => e.stopPropagation()} // Evita que o modal feche ao clicar dentro
          >
            {/* Header do Modal */}
            <div className="modal-header flex justify-between items-center mb-4">
              <img
                src="images/campos.png"
                alt="Logo"
                className="w-10 h-10 mr-2"
              />
              <h5 className="text-lg">Atendimento Virtual - AgroMarket</h5>
              <button
                type="button"
                className="text-gray-500"
                onClick={closeModal}
              >
                X
              </button>
            </div>

            {/* Corpo do Modal */}
            <div className="modal-body mb-4">
              {/* Saudação Inicial */}
              <section className="greeting text-center mb-4">
                <img
                  src="images/bate-papo.png"
                  className="w-7 h-7 mr-2 inline"
                  alt="Ícone de Chat"
                />
                <p className="m-0">Olá, eu sou seu atendente virtual da AgroMarket. Estou aqui para ajudar com suas dúvidas!</p>
              </section>

              {/* Opções de Escolha Inicial */}
              <div className="buttons text-center mb-4">
                <button
                  className="btn btn-outline-primary mx-2"
                  onClick={() => sendInitialMessage('Faça uma pergunta')}
                >
                  Faça uma pergunta
                </button>
                <button
                  className="btn btn-outline-primary mx-2"
                  onClick={() => sendInitialMessage('Exemplos do que entregamos')}
                >
                  Exemplos do que entregamos
                </button>
                <button
                  className="btn btn-outline-primary mx-2"
                  onClick={() => sendInitialMessage('Nossa ideologia sobre o AgroMarket')}
                >
                  Nossa ideologia sobre o AgroMarket
                </button>
              </div>

              {/* Caixa de Chat */}
              <div className="chat-box mb-4 max-h-60 overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'} mb-2`}
                  >
                    <span>{message.text}</span>
                  </div>
                ))}
              </div>

              {/* Área de Entrada de Mensagem */}
              <div className="input-area flex">
                <input
                  type="text"
                  id="userMessage"
                  placeholder="Escreva sua mensagem..."
                  className="form-control w-full p-2 mr-2"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                />
                <button
                  id="sendMessageBtn"
                  className="btn btn-primary p-2"
                  onClick={sendMessage}
                >
                  Enviar
                </button>
              </div>

              {/* Link Saiba Mais */}
              <div className="text-center mt-2">
                <a href="#" className="learn-more text-blue-500">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
