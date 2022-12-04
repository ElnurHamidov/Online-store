import './App.css';
import Footer from './Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main1 from './Body/Main1';
import Main2 from './Body/Main2';
import Main3 from './Body/Main3';
import Registration from './Body/Registration';
import Login from './Body/Login';
import Basket from './Body/Basket';


function App() {
  return (
    <div className="wrapper">
      <Router>
          <Routes>
            <Route exact path="/" element={<Main1 />}/>
            <Route path="/products" element={<Main2 />}/>
            <Route path="/discount" element={<Main3 />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/basket" element={<Basket />} />
          </Routes>
      </Router>


      
      <Footer />
    </div>
  );
}

export default App;
