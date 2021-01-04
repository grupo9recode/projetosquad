import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cadastrar from './Pages/Cadastrar';
import Produtos from './Pages/Produtos';
import Servicos from './Pages/Servicos';
import Contatos from './Pages/Contatos';

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/cadastrar" component={Cadastrar}/>
                <Route path="/produtos" component={Produtos}/>
                <Route path="/servicos" component={Servicos}/>
                <Route path="/contatos" component={Contatos}/>
            </Switch>
        </BrowserRouter>
    ); 
}
export default Rotas;