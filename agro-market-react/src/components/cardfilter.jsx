import React, { useState } from "react";

const ProductCard = ({ image, title, quantity, expirationDate, category }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden product ${category}`}>
      <img src={image} className="w-full h-56 object-cover" alt={title} />
      <div className="p-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-gray-600">{quantity} Disponíveis</p>
        <p className="text-sm text-gray-500">Validade: {expirationDate}</p>
        <div className="mt-3 text-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Ver Mais</button>
        </div>
      </div>
    </div>
  );
};

const Card_Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { image: "images/maça.jpg", title: "Maçãs", quantity: "400 Unidades", expirationDate: "23/02/2025", category: "frutas" },
    { image: "images/melancia.jpg", title: "Melancias", quantity: "120 Unidades", expirationDate: "15/03/2025", category: "frutas" },
    { image: "images/morango.jpg", title: "Morangos", quantity: "250 Unidades", expirationDate: "05/04/2025", category: "frutas" },
    { image: "images/cenoura.jpg", title: "Cenouras", quantity: "300 Unidades", expirationDate: "12/05/2025", category: "legumes" },
    { image: "images/batata.jpg", title: "Batatas", quantity: "450 Unidades", expirationDate: "07/02/2025", category: "legumes" },
    { image: "images/tomate.jpg", title: "Tomate italiano", quantity: "100 Unidades", expirationDate: "10/12/2024", category: "frutas" },
    { image: "images/arroz.jpg", title: "Arroz", quantity: "80Kg", expirationDate: "10/12/2024", category: "graos" },
    { image: "images/feijao.jpg", title: "Feijão", quantity: "50Kg", expirationDate: "10/12/2024", category: "graos" }
  ];

  return (
    <div>
      <div className="text-center mb-6">
        <span 
          className={`px-4 py-2 bg-gray-200 rounded cursor-pointer ${selectedCategory === 'all' ? 'bg-blue-500' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          Todos
        </span>
        <span 
          className={`px-4 py-2 bg-gray-200 rounded cursor-pointer ${selectedCategory === 'frutas' ? 'bg-blue-500' : ''}`}
          onClick={() => setSelectedCategory('frutas')}
        >
          Frutas
        </span>
        <span 
          className={`px-4 py-2 bg-gray-200 rounded cursor-pointer ${selectedCategory === 'legumes' ? 'bg-blue-500' : ''}`}
          onClick={() => setSelectedCategory('legumes')}
        >
          Legumes
        </span>
        <span 
          className={`px-4 py-2 bg-gray-200 rounded cursor-pointer ${selectedCategory === 'graos' ? 'bg-blue-500' : ''}`}
          onClick={() => setSelectedCategory('graos')}
        >
          Grãos
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.filter(product => selectedCategory === 'all' || product.category === selectedCategory).map((product, index) => (
          <ProductCard 
            key={index}
            image={product.image}
            title={product.title}
            quantity={product.quantity}
            expirationDate={product.expirationDate}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Card_Filter;
