import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/Video_list';
import VideoDetail from './components/Video_detail';

const API_KEY = 'AIzaSyB8IioWk4hn7mt4BIEc-yqtv8Qxln-lhd0';
//create a new component
//some html
// const means this is the final value of this vairable
//and it's never gonna change



class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
this.videoSearch('team fortress 2')

  }

videoSearch(term){
  YTSearch({
    key: API_KEY,
    term: term
  }, (videos)=>{
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
     })
  })
}

  render(){
    const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300 )
  return (
    <div>
    <SearchBar onSearchTermChange={ videoSearch }/>
    <VideoDetail video={this.state.selectedVideo}/>
    <VideoList
    onVideoSelect={ (selectedVideo)=>this.setState({selectedVideo}) }
    videos={this.state.videos} />
    </div>
    )
  }
}

//take this component generated html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
