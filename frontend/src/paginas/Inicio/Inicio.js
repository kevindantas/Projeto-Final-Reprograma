import React, { Component } from "react"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import Contato from '../Contato/Contato'
import QuemSomos from '../QuemSomos/QuemSomos'
import Carousel from '../../componentes/Carousel/Carousel'


class Inicio extends Component {
  constructor(props) {
    super(props)
    this.state = { indice: 0 }
  }

  alteraIndice = (indice) => {
    this.setState({ indice });
  }; 

  abreCarousel = () => {
    this.alteraIndice(0)
  }

  abreQuemSomos = () => {
    this.alteraIndice(1)
  }
  abreContato = () => {
    this.alteraIndice(2)
  }

    render() {
      //redirect algo errado ver
      if(this.props.usuario){
        return <Redirect to="/" />        
      }
      return (
      <div className="app">
        <SwipeableViews index={this.state.indice} onChangeIndex={this.alteraIndice}>
          <Carousel abreQuemSomos={this.abreQuemSomos} />
          <QuemSomos abreCarousel={this.abreCarousel} />
          <Contato abreCarousel={this.abreCarousel} />
          <Carousel abreContato={this.abreContato} />
        </SwipeableViews>
      </div>
    )
  }
}

export default connect(
  (state) => ({ usuario: state.usuario })
)(Inicio)
