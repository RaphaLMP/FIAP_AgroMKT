import React, { useEffect, useState, useRef } from "react";
import { Plus, Edit, Trash2, Eye, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Footer from "../../components/footer";
import BackToTop from "../../components/backtotop";

// Dados do gráfico
const salesData = [
  { month: 'Jan', vendas: 1500 },
  { month: 'Fev', vendas: 2000 },
  { month: 'Mar', vendas: 1800 },
  { month: 'Abr', vendas: 2200 },
  { month: 'Mai', vendas: 2500 },
  { month: 'Jun', vendas: 3000 }
];

const DashboardCard = ({ imageSrc, title, value, valueDescription, buttonText, additionalInfo }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        {imageSrc && <img src={imageSrc} alt={title} className="w-12 h-12 rounded-full object-cover" />}
        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
          {buttonText}
        </button>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-green-600 mb-1">
        {value}
        <span className="text-sm text-gray-500 font-normal">{valueDescription}</span>
      </div>
      {additionalInfo && (
        <p className="text-sm text-gray-600">{additionalInfo[0]}</p>
      )}
    </div>
  );
};

const ProductCard = ({ product, onEdit, onDelete, onView }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={product.image} className="w-full h-56 object-cover" alt={product.title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-1">{product.quantity} Disponíveis</p>
        <p className="text-sm text-gray-500 mb-1">Validade: {product.expirationDate}</p>
        <p className="text-lg font-bold text-green-600 mb-3">R$ {product.price}</p>
        <div className="flex gap-2">
          <button
            onClick={() => onView(product)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm transition-colors flex items-center justify-center gap-1"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={() => onEdit(product)}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded text-sm transition-colors flex items-center justify-center gap-1"
          >
            <Edit size={16} />
            Editar
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white p-2 rounded text-sm transition-colors flex items-center justify-center"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductModal = ({ isOpen, onClose, product, onSave, categories }) => {
  const [formData, setFormData] = useState({
    title: '',
    quantity: '',
    expirationDate: '',
    category: 'frutas',
    price: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        quantity: product.quantity || '',
        expirationDate: product.expirationDate || '',
        category: product.category || 'frutas',
        price: product.price || ''
      });
    } else {
      setFormData({
        title: '',
        quantity: '',
        expirationDate: '',
        category: 'frutas',
        price: ''
      });
    }
  }, [product, isOpen]);

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.quantity || !formData.price || !formData.expirationDate) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    onSave({ ...formData, id: product?.id || Date.now() });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            {product ? 'Editar Produto' : 'Adicionar Produto'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Produto
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantidade
            </label>
            <input
              type="text"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ex: 100 Unidades, 50Kg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preço (R$)
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data de Validade
            </label>
            <input
              type="date"
              value={formData.expirationDate}
              onChange={(e) => setFormData({ ...formData, expirationDate: formatDateForDisplay(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoria
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              {product ? 'Atualizar' : 'Adicionar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ViewProductModal = ({ isOpen, onClose, product }) => {
  const getCategoryColor = (category) => {
    const colors = {
      frutas: 'bg-red-100 text-red-800',
      legumes: 'bg-orange-100 text-orange-800',
      graos: 'bg-yellow-100 text-yellow-800',
      verduras: 'bg-green-100 text-green-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      frutas: 'Frutas',
      legumes: 'Legumes',
      graos: 'Grãos',
      verduras: 'Verduras'
    };
    return labels[category] || category;
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Detalhes do Produto</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Quantidade:</span>
            <span className="font-semibold">{product.quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Preço:</span>
            <span className="font-semibold text-green-600">R$ {product.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Categoria:</span>
            <span className={`px-2 py-1 rounded text-sm font-semibold ${getCategoryColor(product.category)}`}>
              {getCategoryLabel(product.category)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Validade:</span>
            <span className="font-semibold">{product.expirationDate}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

const Tela_Usuario = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [viewingProduct, setViewingProduct] = useState(null);
  const [products, setProducts] = useState([
    { id: 1, image: "images/maça.jpg", title: "Maçãs", quantity: "400 Unidades", expirationDate: "23/02/2025", category: "frutas", price: "3.50" },
    { id: 2, image: "images/melancia.jpg", title: "Melancias", quantity: "120 Unidades", expirationDate: "15/03/2025", category: "frutas", price: "12.00" },
    { id: 3, image: "images/morango.jpg", title: "Morangos", quantity: "250 Unidades", expirationDate: "05/04/2025", category: "frutas", price: "8.90" },
    { id: 4, image: "images/cenoura.jpg", title: "Cenouras", quantity: "300 Unidades", expirationDate: "12/05/2025", category: "legumes", price: "2.80" },
    { id: 5, image: "images/batata.jpg", title: "Batatas", quantity: "450 Unidades", expirationDate: "07/02/2025", category: "legumes", price: "4.20" },
    { id: 6, image: "images/tomate.jpg", title: "Tomate italiano", quantity: "100 Unidades", expirationDate: "10/12/2024", category: "frutas", price: "6.50" },
    { id: 7, image: "images/arroz.jpg", title: "Arroz", quantity: "80Kg", expirationDate: "10/12/2024", category: "graos", price: "25.90" },
    { id: 8, image: "images/feijao.jpg", title: "Feijão", quantity: "50Kg", expirationDate: "10/12/2024", category: "graos", price: "18.50" }
  ]);

  const categories = [
    { value: 'frutas', label: 'Frutas' },
    { value: 'legumes', label: 'Legumes' },
    { value: 'graos', label: 'Grãos' },
    { value: 'verduras', label: 'Verduras' }
  ];

  const filteredProducts = products.filter(product =>
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleViewProduct = (product) => {
    setViewingProduct(product);
    setIsViewModalOpen(true);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      // Editar produto existente
      setProducts(products.map(p =>
        p.id === editingProduct.id ? { ...productData, id: editingProduct.id, image: editingProduct.image } : p
      ));
    } else {
      // Adicionar novo produto - usar imagem padrão baseada na categoria
      const defaultImages = {
        frutas: "images/maça.jpg",
        legumes: "images/cenoura.jpg",
        graos: "images/arroz.jpg",
        verduras: "images/maça.jpg" // placeholder
      };
      setProducts([...products, {
        ...productData,
        id: Date.now(),
        image: defaultImages[productData.category] || "images/maça.jpg"
      }]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Gráfico de Vendas */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Gráfico de Vendas Mensais</h2>
          <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="vendas" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cards de Informações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
          <DashboardCard
            title="Faturamento"
            value="R$ 32.457,22"
            valueDescription="/mo"
            buttonText="Detalhes"
            additionalInfo={["58% Vs. ano anterior"]}
          />
          <DashboardCard
            title="Qtd. de Vendas"
            value="589"
            valueDescription=" Vendas"
            buttonText="Detalhes"
            additionalInfo={["83% Vs. ano anterior"]}
          />
          <DashboardCard
            title="Ticket Médio"
            value="R$ 55,10"
            valueDescription="/ticket"
            buttonText="Detalhes"
            additionalInfo={["16% Vs. ano anterior"]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <DashboardCard
            title="Saldo Disponível"
            value="R$ 102.538,91"
            buttonText="Detalhes"
            additionalInfo={["24% Vs. ano anterior"]}
          />
          <DashboardCard
            title="Próximo Repasse"
            value="R$ 22.324,51"
            buttonText="Detalhes"
            additionalInfo={["Agendado para o dia 13/11/2024"]}
          />
        </div>

        {/* Seção de Produtos */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Seus Produtos Anunciados</h2>
            <button
              onClick={handleAddProduct}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Adicionar Produto
            </button>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              Todos ({products.length})
            </button>
            {categories.map(category => {
              const count = products.filter(p => p.category === category.value).length;
              return (
                <button
                  key={category.value}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Grid de Produtos */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEdit={handleEditProduct}
                  onDelete={handleDeleteProduct}
                  onView={handleViewProduct}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-gray-500 mb-4">
                {selectedCategory === 'all' 
                  ? 'Adicione seu primeiro produto para começar a vender'
                  : `Não há produtos na categoria selecionada`
                }
              </p>
              <button
                onClick={handleAddProduct}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
              >
                <Plus size={20} />
                Adicionar Produto
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modais */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={editingProduct}
        onSave={handleSaveProduct}
        categories={categories}
      />

      <ViewProductModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        product={viewingProduct}
      />
      
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Tela_Usuario;