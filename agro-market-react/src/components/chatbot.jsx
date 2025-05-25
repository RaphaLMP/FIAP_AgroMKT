import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const sendMessage = () => {
    if (userMessage.trim() !== '') {
      const newMessages = [...messages, { text: userMessage, sender: 'user' }];
      setMessages(newMessages);
      setUserMessage('');

      setTimeout(() => {
        const botResponse = {
          text: `Você escreveu: ${userMessage}. Como posso te ajudar mais?`,
          sender: 'bot'
        };
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const sendInitialMessage = (message) => {
    let response = '';
    switch (message) {
      case "Faça uma pergunta":
        response = "Estou aqui para te ajudar! Pergunte sobre nossos produtos, entregas ou qualquer outra dúvida relacionada ao AgroMarket.";
        break;
      case "Exemplos do que entregamos":
        response = "No AgroMarket, oferecemos produtos frescos e de qualidade, como frutas, legumes, verduras, laticínios, carnes, grãos e produtos orgânicos, entregues diretamente dos produtores para você.";
        break;
      case "Nossa ideologia sobre o AgroMarket":
        response = "Nosso compromisso é conectar consumidores a produtores locais, incentivando a sustentabilidade, o comércio justo e garantindo alimentos saudáveis e acessíveis para todos.";
        break;
      default:
        response = "Como posso te ajudar mais?";
    }
    
    const newMessages = [
      ...messages,
      { text: message, sender: 'user' },
      { text: response, sender: 'bot' }
    ];
    setMessages(newMessages);
  };

  const predefinedQuestions = [
    "📌 Faça uma pergunta",
    "📦 Exemplos do que entregamos",
    "🌱 Nossa ideologia sobre o AgroMarket"
  ];

  return (
    <div className="relative">
      {/* Ícone do chat - posicionamento responsivo */}
      <div 
        className="fixed bottom-24 right-1 cursor-pointer p=3 z-40 hover:scale-110 transition-transform" 
        onClick={() => setShowModal(true)}
      >
        <img src="images/bate-papo.png" alt="Ícone para abrir modal" className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-[9999] p-2 sm:p-4">
          <div 
            className="bg-white rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do modal */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-gray-50 rounded-t-lg">
              <div className="flex items-center">
                <img src="images/campos.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 mr-2" />
                <h5 className="text-sm sm:text-lg font-semibold">Atendimento Virtual</h5>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold p-1"
              >
                ×
              </button>
            </div>

            {/* Mensagem de boas-vindas */}
            <section className="text-center p-3 sm:p-4 bg-blue-50">
              <p className="text-sm sm:text-base text-gray-700">
                Olá, sou seu atendente virtual. Como posso te ajudar?
              </p>
            </section>

            {/* Botões de opções pré-definidas */}
            <div className="p-3 sm:p-4 border-b">
              <div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-3 gap-2">
                {predefinedQuestions.map((option, index) => (
                  <button 
                    key={index} 
                    className="px-3 py-2 border rounded-lg text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 transition-colors text-left sm:text-center"
                    onClick={() => sendInitialMessage(option.replace(/📌 |📦 |🌱 /, ''))}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Área do chat - flexível */}
            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50 min-h-48 max-h-64 sm:max-h-80">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 text-sm py-8">
                    Escolha uma opção acima ou digite sua mensagem
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`mb-3 ${message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
                    >
                      <div 
                        className={`p-2 sm:p-3 rounded-lg max-w-[80%] text-sm sm:text-base ${
                          message.sender === 'user' 
                            ? 'bg-blue-500 text-white rounded-br-none' 
                            : 'bg-white text-gray-800 border rounded-bl-none shadow-sm'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Input de mensagem */}
              <div className="p-3 sm:p-4 border-t bg-white rounded-b-lg">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button 
                    className="px-3 sm:px-4 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm sm:text-base font-medium transition-colors disabled:bg-gray-300"
                    onClick={sendMessage}
                    disabled={userMessage.trim() === ''}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;