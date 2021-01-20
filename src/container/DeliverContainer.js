import React, {Component} from 'react';
import { connect } from 'react-redux'
// import { fetchDeliversCreator } from '../reducer'
// import { fetchNotationsCreator } from '../reducer'
import DeliverCard from '../component/DeliverCard'
import NotationForm from '../component/NotationForm'


class  DeliverContainer extends Component {
  
  deliversToRender = () => {
    let allDelivers = this.props.delivers
    return allDelivers
            .map(deliver => <DeliverCard key={deliver.id} {...deliver} />)
  }
  render(){
      return (
        <div className=""> 
          {this.deliversToRender()}
          {/* <DeliverCard /> */}
        </div>
      );
  }
}
const msp = state => {
  return {
    delivers: state.delivers,
  }
}

export default connect(msp)(DeliverContainer);


