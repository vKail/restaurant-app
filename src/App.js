import logo from './logo.svg';
import './App.css';
import CartItemsMenu from './components/CartItemsMenu';
import DataMenu from './components/DataMenu';

function App() {
  return (
    <div className="App">
      <DataMenu category={'Postre'}/>
    </div>
  );
}

export default App;
