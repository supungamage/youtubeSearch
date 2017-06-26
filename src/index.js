import React from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import _ from 'lodash'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAKGefCdlhmBSKPAatO06MSMTEKNBAWHmo';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.handleInputChange('React redux tutorials');
  }
  handleInputChange (term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  render () {
    const videoSearch = _.debounce(term => this.handleInputChange(term), 300);
    return (
       <div>
         <SearchBar onInputChange={videoSearch}/>
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
       </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
