import React, { Component } from "react";
import ft from './ft.png'
import fototres from './fototres.png'
import fotozero from './fotozero.png'
import Cadastro from '../../paginas/Cadastro/Cadastro'
import { IoIosArrowBack, IoIosArrowUp, IoIosArrowForward } from 'react-icons/io'
import { Carousel } from "react-responsive-carousel";
import Modal from "react-responsive-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <div className="tamanho-carousel">
          <Carousel autoPlay>
            <div>
              <img src={fototres} />
              <p className="legend">O Brasil é o 4º maior produtor mundial de alimentos</p>
            </div>
            <div>
              <img src={fotozero} />
              <p className="legend">Mas desperdiça 39 mil tonelas por dia</p>
            </div>
            <div>
              <img src={ft} />
              <p className="legend">Hoje 925 milhões de pessoas vão passar fome no mundo.
                  Enquanto isso 20% dos alimentos vão para o lixo todos os dias.
                          </p>
            </div>
            <div>
              <img src={fototres} />
              <p className="legend">Não faça parte disso.Contribua! </p>
            </div>
          </Carousel>
        </div>

        <div>
        <button className="contato__botao" onClick={this.props.abreContato}>
          <span>Contato</span>
          <IoIosArrowForward />
        </button>

        <button className="quemSomos__botao" onClick={this.props.abreQuemSomos}>
          <span>Como Funciona</span>
          <IoIosArrowBack />
        </button>

          <button className="cadastro__botao" onClick={this.onOpenModal}>
            <IoIosArrowUp />
            <span>Cadastre-se</span>
          </button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <Cadastro />
          </Modal>
        </div>
      </div>
    );
  }
}

export default App