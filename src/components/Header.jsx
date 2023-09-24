import { useState } from 'react';

// Definición de un componente funcional llamado Header
export const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  // Estado local 'active' y función para actualizarlo 'setActive'
  const [active, setActive] = useState(false);

  // Función para eliminar un producto del carrito
  const onDeleteProduct = product => {
    // Filtrar la lista de productos para excluir el producto que se va a eliminar
    const updatedProducts = allProducts.filter(item => item.id !== product.id);
  
    // Encontrar el producto que se va a eliminar para calcular su contribución al total
    const deletedProduct = allProducts.find(item => item.id === product.id);
  
    // Calcular el nuevo total restando el costo del producto que se está eliminando
    const newTotal = total - deletedProduct.price * deletedProduct.quantity;
  
    // Calcular el nuevo contador de productos restando la cantidad de productos del mismo tipo que se están eliminando
    const newCountProducts = countProducts - deletedProduct.quantity;
  
    // Actualizar el estado 'total' con el nuevo total calculado
    setTotal(newTotal);
  
    // Actualizar el estado 'countProducts' con el nuevo contador de productos
    setCountProducts(newCountProducts);
  
    // Actualizar el estado 'allProducts' con la nueva lista de productos
    setAllProducts(updatedProducts);
  };
  

  // Función para limpiar todo el carrito
  const onCleanCart = () => {
    setAllProducts([]); // Vaciar lista de productos
    setTotal(0); // Establecer el total a cero
    setCountProducts(0); // Establecer la cantidad de productos a cero
  };

  return (
    <header>
      <h1>Tienda</h1>

      <div className='container-icon'>
        <div
          className='container-cart-icon'
          onClick={() => setActive(!active)}
        >
          {/* Icono de carrito */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='icon-cart'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
          {/* Contador de productos en el carrito */}
          <div className='count-products'>
            <span id='contador-productos'>{countProducts}</span>
          </div>
        </div>

        {/* Contenedor de productos en el carrito */}
        <div
          className={`container-cart-products ${
            active ? '' : 'hidden-cart'
          }`}
        >
          {allProducts.length ? (
            // Si hay productos en el carrito
            <>
              <div className='row-product'>
                {allProducts.map(product => (
                  // Mostrar cada producto en el carrito
                  <div className='cart-product' key={product.id}>
                    <div className='info-cart-product'>
                      <span className='cantidad-producto-carrito'>
                        {product.quantity}
                      </span>
                      <p className='titulo-producto-carrito'>
                        {product.nameProduct}
                      </p>
                      <span className='precio-producto-carrito'>
                        ${product.price}
                      </span>
                    </div>
                    {/* Icono para eliminar el producto del carrito */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='icon-close'
                      onClick={() => onDeleteProduct(product)}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Mostrar el total a pagar y botón para vaciar el carrito */}
              <div className='cart-total'>
                <h3>Total:</h3>
                <span className='total-pagar'>${total}</span>
              </div>

              <button className='btn-clear-all' onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            // Si no hay productos en el carrito
            <p className='cart-empty'>El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
