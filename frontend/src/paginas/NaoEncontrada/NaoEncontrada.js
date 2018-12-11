import React from 'react'
import './NaoEncontrada.css'
import Footer from '../../componentes/Footer/Footer'
import notFound from './notfound.png'

function NaoEncontrada() {
    return (
        <main className="nao-encontrada">
        <h1>Página não encontrada</h1>
        <p className="nao-encontrada_simbolo">:-(</p>
        <img src={notFound} alt="Erro: pagina não encontrado"/>
        <Footer/>
        </main>

    )
}

export default NaoEncontrada