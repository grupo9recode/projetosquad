import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cadastrar from './Pages/Cadastrar';
import Produtos from './Pages/Produtos';
import Servicos from './Pages/Servicos';
import Contatos from './Pages/Contatos';
import EditarDados from './Pages/EditarDados';
import './App.css';
const Rotas = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/cadastrar" component={Cadastrar}/>
                <Route path="/produtos" component={Produtos}/>
                <Route path="/servicos" component={Servicos}/>
                <Route path="/contatos" component={Contatos} />
                <Route path="/editardados" component={EditarDados}/>
            </Switch>
        </BrowserRouter>
    ); 
}
export default Rotas;