import React, { Component } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Footer from '../../componentes/Footer/Footer'
import maos from './maos.png'
import './QuemSomos.css'

class QuemSomos extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="menu_quemSomos">
                <img className="imagem" src={maos}></img>
                    <h1>COMO FUNCIONA</h1>
                <div className="quem-somos__texto">
                    <Flippy
                        flipOnHover={false}
                        flipOnClick={true}
                        flipDirection="horizontal"
                        style={{ width: '400px', height: '400px' }}
                    >
                        <FrontSide
                            style={{
                                border: '1px solid rgb(158, 153, 153)',
                            }}
                        >
                            RICK
                        </FrontSide>
                        <BackSide
                            style={{
                                border: '1px solid rgb(158, 153, 153)',
                            }}>

                            ROCKS
                        </BackSide>
                    </Flippy>
              
                    <Flippy
                        flipOnHover={false}
                        flipOnClick={true}
                        flipDirection="horizontal"
                        ref={(r) => this.flippy = r}
                        style={{ width: '400px', height: '400px' }}
                    >
                        <FrontSide
                            style={{
                                border: '1px solid rgb(158, 153, 153)',
                            }}
                        >
                            RICK
                        </FrontSide>
                        <BackSide
                            style={{
                                border: '1px solid rgb(158, 153, 153)',
                            }}>

                            ROCKS
                        </BackSide>
                    </Flippy>
                </div>

                <Footer />
                <button className="Quem-Somos__botao" onClick={this.props.abreCarousel}>
                    <IoIosArrowBack />
                    <p> Voltar </p>
                </button>
            </main>

        )
    }
}

export default QuemSomos