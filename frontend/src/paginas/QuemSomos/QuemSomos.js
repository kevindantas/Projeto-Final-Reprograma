import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Footer from '../../componentes/Footer/Footer'
import './QuemSomos.css'

class QuemSomos extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="menu_quemSomos">
                    <h1>Como Funciona</h1>
                <div className="quem-somos__texto">
                    <Flippy
                        flipOnHover={false}
                        flipOnClick={true}
                        flipDirection="horizontal"
                    >
                        <FrontSide className="frontSide">
                            <span className="textoFrontSide">
                                PARA &nbsp;&nbsp;INSTITUIÇÕES
                            </span> 
                        </FrontSide>
                        <BackSide className="backSide">
                        <span className="textoBackSide">
                          Você que é uma instituição e precisa e aceita
                          receber doação de comidas que sobram de estabelecimentos. 
                          Faça seu cadastro e preencha as informações e espere
                          algum estabelecimento entrar em contato e combinarem o melhor 
                          para ambos.            
                        </span>
                        </BackSide>
                    </Flippy>
              
                    <Flippy
                        flipOnHover={false}
                        flipOnClick={true}
                        flipDirection="horizontal"  
                    >
                        <FrontSide className="frontSide">
                            <span className="textoFrontSide">
                            PARA ESTABELECIMENTOS
                            </span>
                        </FrontSide>
                        <BackSide className="backSide">
                            <span className="textoBackSide">
                            fsdfsfsdffsdfsfsdffsdfsfsdffsdfsfsdf
                            fsdfsfsdffsdfsfsdffsdfsfsdffsdfsfsdf
                            fsdfsfsdffsdfsfsdffsdfsfsdffsdfsfsdf
                            fsdfsfsdffsdfsfsdffsdfsfsdffsdfsfsdf
                               
                            </span>
                        </BackSide>
                    </Flippy>
                </div>
                <span className="footer">
                <Footer/>

                </span>
                <button className="Quem-Somos__botao" onClick={this.props.abreCarousel}>
                    <IoIosArrowBack />
                    <p> Voltar </p>
                </button>
            </main>

        )
    }
}

export default QuemSomos