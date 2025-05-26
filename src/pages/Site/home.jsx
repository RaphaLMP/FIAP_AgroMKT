import React, { useState } from "react";
import Footer from "../../components/footer";
import Carousel from "../../components/carousel";
import BackToTop from "../../components/backtotop";

// Componente do Carrinho de Compras
const Cart = ({ items, onRemoveFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão flutuante para mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-40 right-3 bg-green-600 text-white p-3 rounded-full shadow-lg z-50 lg:hidden"
      >
        <span className="text-lg">🛒</span>
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

      {/* Carrinho para desktop */}
      <div className="hidden lg:block fixed top-1/4 right-0 bg-white shadow-lg w-64 p-4 rounded-l-lg border-l-4 border-green-600 z-50">
        <h2 className="text-xl font-semibold mb-4">Carrinho de Compras</h2>
        <ul className="space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio</p>
          ) : (
            items.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-sm">{item.title} (x{item.quantity})</span>
                <button
                  onClick={() => onRemoveFromCart(item.title)}
                  className="text-red-600 hover:text-red-800 text-xs"
                >
                  Remover
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="mt-4 text-center">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm">
            Finalizar Compra
          </button>
        </div>
      </div>

      {/* Modal do carrinho para mobile */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg p-4 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Carrinho de Compras</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <ul className="space-y-3">
              {items.length === 0 ? (
                <p className="text-gray-500">Seu carrinho está vazio</p>
              ) : (
                items.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-sm">{item.title} (x{item.quantity})</span>
                    <button
                      onClick={() => onRemoveFromCart(item.title)}
                      className="text-red-600 hover:text-red-800 text-xs"
                    >
                      Remover
                    </button>
                  </li>
                ))
              )}
            </ul>
            <div className="mt-4 text-center">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Componente do Produto
const ProductCard = ({ src, title, stock, date, category, onAddToCart }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden product ${category || ''}`}>
      <img
        src={src.startsWith("images/") ? src : `images/${src}`}
        className="w-full h-40 sm:h-48 md:h-56 object-cover"
        alt={title}
      />
      <div className="p-3 sm:p-4">
        <p className="text-sm sm:text-lg font-semibold">{title}</p>
        <p className="text-xs sm:text-sm text-gray-600">{stock} Disponíveis</p>
        <p className="text-xs text-gray-500">Validade: {date}</p>
        <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:justify-center">
          <button className="bg-green-600 text-white px-3 py-2 text-xs sm:text-sm rounded hover:bg-green-700 transition">
            Ver Mais
          </button>
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(title)}
              className="bg-green-600 text-white px-3 py-2 text-xs sm:text-sm rounded hover:bg-green-700 transition w-1/2 sm:w-auto self-center"
            >
              <span className="text-lg">+</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Lista de Produtos
const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const addToCart = (title) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === title);
      if (existingItem) {
        return prevItems.map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { title, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (title) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
  };

  // Produtos originais do Home
  const mainProducts = [
    { src: "milho.jpg", title: "Milho verde", stock: "30 Caixas", date: "05/04/2025" },
    { src: "pepino.jpg", title: "Pepino", stock: "80 Caixas", date: "05/04/2025" },
    { src: "cenoura.jpg", title: "Cenoura", stock: "40 Caixas", date: "05/04/2025" }
  ];

  const specialProducts = [
    { src: "brocolis.jpg", title: "Brócolis Ninja", stock: "50 Unidades", date: "07/12/2024" },
    { src: "cebola.jpg", title: "Cebola", stock: "200 Caixas", date: "01/01/2025" }
  ];

  // Produtos da Card_Filter que foram integrados
  const filterProducts = [
    { src: "images/maça.jpg", title: "Maçãs", stock: "400 Unidades", date: "23/02/2025", category: "frutas" },
    { src: "images/melancia.jpg", title: "Melancias", stock: "120 Unidades", date: "15/03/2025", category: "frutas" },
    { src: "images/morango.jpg", title: "Morangos", stock: "250 Unidades", date: "05/04/2025", category: "frutas" },
    { src: "images/cenoura.jpg", title: "Cenouras", stock: "300 Unidades", date: "12/05/2025", category: "legumes" },
    { src: "images/batata.jpg", title: "Batatas", stock: "450 Unidades", date: "07/02/2025", category: "legumes" },
    { src: "images/tomate.jpg", title: "Tomate italiano", stock: "100 Unidades", date: "10/12/2024", category: "frutas" },
    { src: "images/arroz.jpg", title: "Arroz", stock: "80Kg", date: "10/12/2024", category: "graos" },
    { src: "images/feijao.jpg", title: "Feijão", stock: "50Kg", date: "10/12/2024", category: "graos" }
  ];

  return (
    <div>
      <Carousel />
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 mt-16 sm:mt-24">
        {/* Integração do Card_Filter */}
        <div>
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex flex-wrap justify-center gap-2">
              <span
                className={`px-3 py-2 text-xs sm:text-sm bg-gray-500 rounded cursor-pointer ${selectedCategory === 'all' ? 'bg-green-600' : ''} text-white`}
                onClick={() => setSelectedCategory('all')}
              >
                Todos
              </span>
              <span
                className={`px-3 py-2 text-xs sm:text-sm bg-gray-500 rounded cursor-pointer ${selectedCategory === 'frutas' ? 'bg-green-600' : ''} text-white`}
                onClick={() => setSelectedCategory('frutas')}
              >
                Frutas
              </span>
              <span
                className={`px-3 py-2 text-xs sm:text-sm bg-gray-500 rounded cursor-pointer ${selectedCategory === 'legumes' ? 'bg-green-600' : ''} text-white`}
                onClick={() => setSelectedCategory('legumes')}
              >
                Legumes
              </span>
              <span
                className={`px-3 py-2 text-xs sm:text-sm bg-gray-500 rounded cursor-pointer ${selectedCategory === 'graos' ? 'bg-green-600' : ''} text-white`}
                onClick={() => setSelectedCategory('graos')}
              >
                Grãos
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filterProducts
              .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
              .map((product, index) => (
                <ProductCard
                  key={index}
                  src={product.src}
                  title={product.title}
                  stock={product.stock}
                  date={product.date}
                  category={product.category}
                  onAddToCart={addToCart}
                />
              ))}
          </div>
        </div>

        {/* Banner promocional responsivo */}
        <div className="relative p-4 sm:p-8 text-center bg-green mt-6 sm:mt-10 rounded-lg overflow-hidden">
          <img
            src="images/mercadofrutas.jpg"
            alt="Anúncio"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.6)" }}
          />
          <div className="relative z-10 py-8 sm:py-16">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              Anuncie Aqui
            </h1>
            <h3 className="text-lg sm:text-2xl lg:text-3xl text-white">
              As melhores frutas e verduras do mercado
            </h3>
          </div>
        </div>

        <ProductList products={mainProducts} onAddToCart={addToCart} />

        {/* Banner secundário */}
        <div className="relative p-4 sm:p-8 text-center bg-green mt-6 sm:mt-10 rounded-lg overflow-hidden h-32 sm:h-48">
          <img
            src="images/mercado.jpg"
            alt="Anúncio"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.6)" }}
          />
        </div>

        {/* Produtos especiais - responsivo */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="w-full sm:w-1/2">
            <ProductCard {...specialProducts[0]} onAddToCart={addToCart} />
          </div>
          <div className="w-full sm:w-1/2">
            <ProductCard {...specialProducts[1]} onAddToCart={addToCart} />
          </div>
        </div>

        <Cart items={cartItems} onRemoveFromCart={removeFromCart} />

        {/* Vídeo responsivo */}

        <div className="mt-5 w-full md:w-[640px] mx-auto">
          <h2 className="text-xl sm:text-2xl text-center mb-4 sm:mb-6">Veja o Vídeo</h2>
          <div className="relative aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/qrInF5qj6Sc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Formulário de contato responsivo */}
        <div className="flex justify-center mt-8" id="faleConosco">
          <div className="max-w-md w-full px-4">
            <h2 className="text-xl sm:text-2xl text-center mb-4 sm:mb-6">Fale Conosco</h2>
            <form id="contactForm">
              <div className="mb-4 sm:mb-6">
                <label htmlFor="inputName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  id="inputName"
                  placeholder="Digite seu nome completo"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Seu nome completo deve incluir pelo menos um sobrenome.
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="inputEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço de Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  id="inputEmail"
                  placeholder="Digite seu email"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Nunca compartilharemos seu email com ninguém.
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="inputMessage" className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição da Mensagem
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  id="inputMessage"
                  rows="4"
                  placeholder="Escreva sua mensagem (entre 30 e 500 caracteres)"
                  required
                  minLength="30"
                  maxLength="500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Sua mensagem deve ter entre 30 e 500 caracteres.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        <BackToTop />
        <Footer />
      </div>
    </div>
  );
};

export default Home;