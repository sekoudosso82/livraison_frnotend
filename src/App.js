import React from 'react' 
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { fetchDeliversCreator } from './reducer'
import './App.css';
class App extends React.Component {
  componentDidMount(){this.props.fetchDelivers()}
  render(){
    console.log("app props delivers", this.props.delivers)
    console.log("app props notation", this.props.notation)
    return (
      <div className="App">
      </div>
    );
  }
}
const msp = state => {
  return {
    delivers: state.delivers,
    notation: state.notation}
}
const mdp = dispatch => {
  return {fetchDelivers: () => dispatch(fetchDeliversCreator())}
}
export default connect(msp,mdp)(App);

