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
      <div className="fixed bottom-24 right-5 cursor-pointer z-50" onClick={() => setShowModal(true)}>
        <img src="images/bate-papo.png" alt="Ícone para abrir modal" className="w-12 h-12" />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white p-6 rounded-lg w-[80%] md:w-[600px] shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-center mb-4 border-b pb-2">
              <img src="images/campos.png" alt="Logo" className="w-10 h-10 mr-2" />
              <h5 className="text-lg font-semibold text-center">Atendimento Virtual - AgroMarket</h5>
            </div>

            <section className="text-center mb-4">
              <p className="m-0">Olá, sou seu atendente virtual. Como posso te ajudar?</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-center">
              {predefinedQuestions.map((option, index) => (
                <button key={index} className="px-3 py-2 border rounded-lg text-sm bg-gray-200 hover:bg-gray-300 transition" onClick={() => sendInitialMessage(option.replace(/📌 |📦 |🌱 /, ''))}>
                  {option}
                </button>
              ))}
            </div>

            <div className="chat-box border p-3 mb-4 h-60 overflow-y-auto bg-gray-100 rounded-lg">
              {messages.map((message, index) => (
                <div key={index} className={`p-2 rounded-lg my-1 ${message.sender === 'user' ? 'bg-blue-200 self-end text-right' : 'bg-gray-300 self-start text-left'}`}>
                  {message.text}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Escreva sua mensagem..."
                className="flex-grow p-2 border rounded-lg"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button className="px-3 py-2 bg-blue-500 text-white rounded-lg" onClick={sendMessage}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;