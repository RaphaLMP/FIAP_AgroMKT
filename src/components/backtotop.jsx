import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

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
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      ↑
    </button>
  );
};

export default BackToTop;
