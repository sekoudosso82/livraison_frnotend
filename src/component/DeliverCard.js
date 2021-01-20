import React, {Component} from 'react';
import {connect} from 'react-redux'
// import { fetchNotationsCreator } from '../reducer'
import NotationForm from './NotationForm'
 

class  DeliverCard extends Component  {
  
  
  render(){
    // console.log("notation length", this.props)
    return (
      <div>
        <div className="">
          <img alt="name" src={this.props.logo}/>
          <p>Compagnie: {this.props.compagnie}</p>
          <p>Region: {this.props.region}</p>
          <p>Ville: {this.props.ville}</p>
          <p>Telephone: {this.props.telephone}</p> 
          <div>
            <div>{ this.props.notations ? this.props.notations.map( (notation, ind) => <div key={ind}>{notation.nom}: {notation.commentaire}</div>) : null } </div>
          </div>
        </div>
        <NotationForm deliver_id={this.props.id}/>
      </div>
        
    );

  }
}


// const msp = state => {
//   return {
//     notations: state.notations
//   }
// }

// const mdp = dispatch => {
//   return {
//     fetchNotations: () => dispatch(fetchNotationsCreator())
//   }
// }
// export default connect(msp, mdp)(DeliverCard);


export default DeliverCard;

