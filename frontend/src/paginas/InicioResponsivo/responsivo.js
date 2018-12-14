import React, { Component } from "react"
import ft from './ft.png'
import fototres from './fototres.png'
import fotozero from './fotozero.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class DemoCarousel extends Component {
  render() {
    return (
      <div className="carousel-tamanho">
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

    )
  }
}

export default DemoCarousel