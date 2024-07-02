import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import View from './components/View';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Add/>}/>
      <Route path="/View" element={<View/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Delete" element={<Delete/>}/> 
    </Routes>
    </BrowserRouter>

  );
}

export default App;
