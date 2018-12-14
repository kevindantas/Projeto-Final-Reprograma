import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './componentes/Navbar/Navbar'
import Login from './paginas/Login/Login'
import Cadastro from './paginas/Cadastro/Cadastro'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Home from './paginas/Home/Home'
import Inicio from './paginas/Inicio/Inicio'
import QueroContribuir from './paginas/QueroContribuir/QueroContribuir'
import './index.css'

function App() {
    return (
        <div className="app">
            <Navbar />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/inicio" component={Inicio} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/contato" component={Contato} />
                <Route path="/quem-somos" component={QuemSomos} />
                <Route path="/quero-contribuir" component={QueroContribuir} />
                <Route component={NaoEncontrada} />
            </Switch>
        </div>
    )
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    </Provider>,
document.getElementById('projeto'))
