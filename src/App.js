import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const products = useSelector(state => state.products)  
  return (
    <div className="App">
      {
        products.map(product =>
          <div key={product.id}>
            {product.name }
            {product.price}
            </div>
            )
      }
      
    </div>
  );
}

export default App;
