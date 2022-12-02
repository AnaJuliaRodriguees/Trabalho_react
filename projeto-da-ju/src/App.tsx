import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Contatos } from './pages/Home/Contatos/Contatos';
import { Home } from './pages/Home/Home/Home';
import { Servicos } from './pages/Home/Serviços/Serviços';


function App() {
  return (
    <>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contatos' element={<Contatos/>} />
        <Route path='/servicos' element={<Servicos/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;