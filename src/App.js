import './App.css';
import Footer from './Footer';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Main1 from './Body/Main1';
import Main2 from './Body/Main2';
import Main3 from './Body/Main3';
import Registration from './Body/Registration';
import Login from './Body/Login';
import Basket from './Body/Basket';
import {useState} from 'react';
import Context from './Context';


function App() {

  const [items, setItems] = useState([]);
 
 
  function onAdd(obj){
    let el;
    if(items.find(e=> e.id===obj.id)){
       el=items.map(e=>{
        if(e.id!==obj.id){
          return e;
        }else{
          return({
            id: obj.id,
            name: obj.name,
            description: obj.description,
            price: obj.price,
            count: obj.count + 1

          })
        }
      })
    }else{
     el=items;
    el=el.concat(obj);
    }
    setItems(el);

  }

  function onDelete(id){
    const arr=items.filter(e=>e.id!==id);
    setItems(arr);
  }

  function onIncrease(id){
    const arr = items.map(e=>{
      if(e.id!==id){
        return e;
      }else{
        return(
          {
            id: e.id,
            name: e.name,
            description: e.description,
            price: e.price,
            count: e.count + 1
          }
        )
      }
    })
    
    setItems(arr);
  }

  function onDecrease(id){

    const el=items.find(e=> e.id ===id);
    if(el.count===1){
      const confirm = window.confirm('Remove item?');
      if(confirm) onDelete(id);
      return;
    }

    const arr = items.map(e=>{
      if(e.id!==id){
        return e;
      }else{
        return (
          {
            id: e.id,
            name: e.name,
            description: e.description,
            price: e.price,
            count: e.count - 1,
          }
        )
        
      }
    })
    setItems(arr);
  }

  const obj={
    items,
    onAdd,
    onDelete,
    onIncrease,
    onDecrease,
  }

  return (
        <Context.Provider value={obj}>
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
        </Context.Provider>
  );
}

export default App;
