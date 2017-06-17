import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }

  }
  render(){
  return <input onChange={ (e)=> this.onInputChange(e.target.value)  } />
  }

onInputChange(term){
  this.setState({
    term: term
  })
  this.props.onSearchTermChange(term)
}


}

export default SearchBar;
