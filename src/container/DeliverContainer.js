import React, {Component} from 'react';
import DeliverCard from '../component/DeliverCard'
import NotationForm from '../component/NotationForm'


class  DeliverContainer extends Component {
  
  

  render(){
      return (
        <div className="App"> 
            <DeliverCard /> 
            <NotationForm />
        </div>
      );
  }
}


export default (DeliverContainer);

