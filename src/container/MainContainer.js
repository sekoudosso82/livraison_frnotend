import React, {Component} from 'react';
import DeliverContainer from './DeliverContainer'
import FilterBarContainer from './FilterBarContainer' 


class  MainContainer extends Component {
  
  

  render(){
      return (
        <div className="App"> 
        
            <DeliverContainer /> 
            <FilterBarContainer />
        </div>
      );
  }
}


export default (MainContainer);

