import './styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={PaymentSuccess} />
      </Router>
    </>
  );
}

export default App;
