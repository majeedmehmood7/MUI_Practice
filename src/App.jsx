import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Setting from './Pages/Setting';
import About from './Pages/About';
import Product from './Pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/setting" exact element={<Setting />} />
        <Route path='/product' exact element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
