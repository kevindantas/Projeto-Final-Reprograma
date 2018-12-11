import React from 'react'
import instagramIcone from './instagram.jpg'
import facebookIcone from './facebook.jpg'
import twitterIcone from './twitter.jpg'
import './Footer.css'

function Footer() {
    return (
        <footer class="sobre-conteudo__redes-sociais">
            <a href="https://www.instagram.com/">
                <img src={instagramIcone} title="Instagram" alt="Ícone do Instagram" />
            </a>

            <a href="https://www.facebook.com/">
                <img src={facebookIcone} title="Facebook" alt="Ícone do Facebook" />
            </a>

            <a href="https://twitter.com/">
                <img src={twitterIcone} title="Twitter" alt="Ícone do Twitter" />
            </a>      
        </footer>
    )
}

export default Footer