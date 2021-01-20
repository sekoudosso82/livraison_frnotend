import React, {Component} from 'react';
import {connect} from 'react-redux' 
import { fetchDeliversCreator } from '../reducer'

const initialState = {
  commentaire: '',
  nom: ''
}
class  NotationForm extends Component {
  //state 
  state = initialState
  // methods 
  handleChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    let data = {
      deliver_id: this.props.deliver_id, 
      nom: this.state.nom,
      commentaire: this.state.commentaire
    } 
    fetch("http://localhost:3000/notations",{
      method: "Post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(data => data.json())
    .then(newNotation => { 
      console.log("New notation comment", newNotation)
      this.props.fetchDelivers() 
    })
    this.setState(initialState)
  }

  // render 
  render(){
    console.log("newNotation  props deliver_id", this.props.deliver_id)
    console.log("newNotation  props nom", this.state.nom)
    console.log("newNotation  props commentaire", this.state.commentaire)


      return (
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <label>
                nom: <input onChange={this.handleChange} type="text" name="nom" value={this.state.nom}/>
            </label>
            <label>
                commentaire: <input onChange={this.handleChange} type="text" name="commentaire" value={this.state.commentaire}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
  }
}

const mdp = dispatch => {
  return {
    fetchDelivers: () => dispatch(fetchDeliversCreator()),
  }
}

export default connect(null, mdp)(NotationForm);

