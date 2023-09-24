import { useState } from 'react';
import { Header } from './components/Header'; // Importar el componente Header
import { ProductList } from './components/ProductList'; // Importar el componente ProductList

function App() {
  // Estados locales para gestionar productos, total y cantidad de productos
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      {/* Renderizar el componente Header */}
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      {/* Renderizar el componente ProductList */}
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </>
  );
}

export default App;
