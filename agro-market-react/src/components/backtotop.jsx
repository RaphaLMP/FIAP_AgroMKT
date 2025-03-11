import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para detectar o scroll da página
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Mostra o botão quando rolar mais de 300px
    } else {
      setIsVisible(false); // Esconde o botão se estiver no topo
    }
  };

  // Função para rolar a página para o topo com efeito suave
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Efeito de escuta de evento para rolagem da página
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpeza do evento quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      id="backToTop"
      onClick={scrollToTop}
      title="Voltar ao Topo"
      className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full shadow-md"
      style={{ display: isVisible ? 'block' : 'none' }} // Controle da visibilidade do botão
    >
      ↑
    </button>
  );
};

export default BackToTop;
