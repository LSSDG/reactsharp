import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartContextProvider } from './store/cart-context';

function App() {
  return (
   <CartContextProvider>  
  <div>
      <header >
         <Cart/>
      </header>

      <Products/>
  </div></CartContextProvider>
     
  );
}

export default App;
