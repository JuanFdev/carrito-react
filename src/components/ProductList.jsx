// Importar el conjunto de datos 'data' desde un archivo '../data'
import { data } from '../data';

// Definición de un componente funcional llamado ProductList
export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  // Función para añadir un producto al carrito
  const onAddProduct = product => {
    if (allProducts.find(item => item.id === product.id)) {
      // Si el producto ya está en el carrito, se actualiza la cantidad
      const products = allProducts.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    // Si el producto no está en el carrito, se añade a la lista de productos
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className='container-items'>
      {data.map(product => (
        // Para cada producto en el conjunto de datos 'data'
        <div className='item' key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className='info-product'>
            <h2>{product.nameProduct}</h2>
            <p className='price'>${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
