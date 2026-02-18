import { useCart } from '../context/CartContext';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ProductCard = ({ product }) => {
  const { openProductModal } = useCart();
  const ref = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className="reveal card-hover bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700"
      onClick={() => openProductModal(product)}
    >
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img 
          src={product.imageSrc} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
          {product.name}
        </h3>
        <p className="text-accent-600 dark:text-accent-400 font-bold">
          ${product.price.toFixed(2)}
          {product.unit && <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">{product.unit}</span>}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;