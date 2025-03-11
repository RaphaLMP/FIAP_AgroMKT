import React, { useEffect } from "react";
import Footer from "../../components/footer";
import Card_Filter from "../../components/cardfilter";
import Carousel from "../../components/carousel";
import BackToTop from "../../components/backtotop";

const ProductCard = ({ src, title, stock, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden product">
      <img src={`images/${src}`} className="w-full h-56 object-cover mt-4" alt={title} />
      <div className="p-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-gray-600">{stock} Disponíveis</p>
        <p className="text-sm text-gray-500">Validade: {date}</p>
        <div className="mt-3 text-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Ver Mais
          </button>
        </div>
      </div>
    </div>
  );
};


const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    const items = document.querySelectorAll("[data-carousel-item]");
    const prevButton = document.querySelector("[data-carousel-prev]");
    const nextButton = document.querySelector("[data-carousel-next]");
    let currentItem = 0;

    const showNextItem = () => {
      items[currentItem].classList.add("hidden");
      currentItem = (currentItem + 1) % items.length;
      items[currentItem].classList.remove("hidden");
    };

    const showPrevItem = () => {
      items[currentItem].classList.add("hidden");
      currentItem = (currentItem - 1 + items.length) % items.length;
      items[currentItem].classList.remove("hidden");
    };

    if (prevButton) prevButton.addEventListener("click", showPrevItem);
    if (nextButton) nextButton.addEventListener("click", showNextItem);

    items[currentItem].classList.remove("hidden");

    return () => {
      if (prevButton) prevButton.removeEventListener("click", showPrevItem);
      if (nextButton) nextButton.removeEventListener("click", showNextItem);
    };
  }, []);

  const mainProducts = [
    { src: "milho.jpg", title: "Milho verde", stock: "30 Caixas", date: "05/04/2025" },
    { src: "pepino.jpg", title: "Pepino", stock: "80 Caixas", date: "05/04/2025" },
    { src: "cenoura.jpg", title: "Cenoura", stock: "40 Caixas", date: "05/04/2025" }
  ];

  const specialProducts = [
    { src: "brocolis.jpg", title: "Brócolis Ninja", stock: "50 Unidades", date: "07/12/2024" },
    { src: "cebola.jpg", title: "Cebola", stock: "200 Caixas", date: "01/01/2025" }
  ];

  return (
    <div>
      <Carousel />
      <div className="container mx-auto px-4 py-8 mt-24">
        <Card_Filter />

        <div className="relative p-2 p-md-3 m-md-3 text-center bg-green pt-40 mt-10">
          <img src="images/mercadofrutas.jpg" alt="Anúncio" className="img-overlay" style={{ filter: "brightness(0.6)" }}
          />
          <div className="col-md-6 p-lg-4 mx-auto my-3">
            <h1 className="display-4 fw-bold text-white">Anuncie Aqui</h1>
            <h3 className="fw-normal mb-2 text-white">As melhores frutas e verduras do mercado</h3>
          </div>
        </div>

        <ProductList products={mainProducts} />

        <div className="relative p-2 p-md-3 m-md-3 text-center bg-green pt-40 mt-10">
          <img src="images/mercado.jpg" alt="Anúncio" className="img-overlay" style={{ filter: "brightness(0.6)" }}
          />
          <div className="col-md-6 p-lg-4 mx-auto my-3"></div>
        </div>

        <div className="flex gap-6 mt-8">
          <div className="w-1/2">
            <ProductCard {...specialProducts[0]} />
          </div>
          <div className="w-1/2">
            <ProductCard {...specialProducts[1]} />
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 text-center">
            <h2>Assista ao vídeo</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nZye2JOPdHE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mx-auto" // Centraliza o iframe
            />
          </div>
        </div>

        <div className="flex justify-center mt-5" id="faleConosco"> {/* Flexbox para centralizar */}
          <div className="max-w-md w-full"> {/* Limita a largura e centraliza */}
            <h2 className="text-center mb-4">Fale Conosco</h2> {/* Centraliza o título */}
            <form id="contactForm">

              <div className="mb-6">
                <label htmlFor="inputName" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="inputName"
                  placeholder="Digite seu nome completo"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Seu nome completo deve incluir pelo menos um sobrenome.</p>
              </div>

              <div className="mb-6">
                <label htmlFor="inputEmail" className="block text-sm font-medium text-gray-700">Endereço de Email</label>
                <input
                  type="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="inputEmail"
                  placeholder="Digite seu email"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Nunca compartilharemos seu email com ninguém.</p>
              </div>

              <div className="mb-6">
                <label htmlFor="inputMessage" className="block text-sm font-medium text-gray-700">Descrição da Mensagem</label>
                <textarea
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="inputMessage"
                  rows="4"
                  placeholder="Escreva sua mensagem (entre 30 e 500 caracteres)"
                  required
                  minLength="30"
                  maxLength="500"
                />
                <p className="mt-1 text-xs text-gray-500">Sua mensagem deve ter entre 30 e 500 caracteres.</p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;
