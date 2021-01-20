import React from 'react' 
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { fetchDeliversCreator } from './reducer'
import './App.css';
import MainContainer from './container/MainContainer'
import DeliverCard from  './component/DeliverCard'
import DeliverContainer from './container/DeliverContainer';
class App extends React.Component {
  componentDidMount(){
    this.props.fetchDelivers()
    
  }
  render(){
    // console.log("app props delivers", this.props.delivers)
    return (
      <div className="App">
        <Router>
          <MainContainer /> 
          <Switch>    
            <Route path="/delivers" render={() => <DeliverContainer />} />
            {/* <Route path="/" component={DeliverContainer} />   */}
          </Switch>
        </Router>
      </div>
    );
  }
}
const msp = state => {
  return {
    delivers: state.delivers,
    // notations: state.notations 
  }
}
const mdp = dispatch => {
  return {
    fetchDelivers: () => dispatch(fetchDeliversCreator()),
    // fetchNotations: () => dispatch(fetchNotationsCreator())
  }
}
export default connect(msp,mdp)(App);

