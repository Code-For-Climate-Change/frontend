import React from 'react';
import './App.css'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import Home from './paginas/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store/Store';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import 'react-toastify/dist/ReactToastify.css'
import Sobre from './components/static/Sobre';
import Contatos from './components/static/Contatos';
import Perfil from './paginas/perfil/Perfil';
import AtualizarUsuario from './components/usuarios/atualizarUsuario/AtualizarUsuario';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/feed" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/editar" element={<AtualizarUsuario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}


export default App;