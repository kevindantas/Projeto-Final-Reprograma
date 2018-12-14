import React, { Component } from 'react'
import { connect } from 'react-redux'

import { listaPerfil } from '../../redux/actions'
import { Card } from 'semantic-ui-react'
import './QueroContribuir.css'

    const items = [
      {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
      },
      {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
      },
    ]
    
const CardExampleGroupProps = () => <Card.Group items={items} />
      
export default CardExampleGroupProps

  // componentDidMount() {
  //   this.props.listaPerfil()
  // }

  


// export default connect(
//   (state) => ({ usuario: state.usuario }),
//   { listaPerfil, }
// )(QueroContribuir)
