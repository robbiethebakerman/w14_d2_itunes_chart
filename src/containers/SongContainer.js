import React, { Component, Fragment } from 'react';
import SongList from '../components/SongList';

class SongContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      updatedDate: '',
      updatedTime: ''
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener("load", () => {
      if (request.status !== 200) {
        return
      }
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      const formattedDate = data.feed.updated.label.slice(0, 10);
      const formattedTime = data.feed.updated.label.slice(11, 19);
      this.setState({songs: data.feed.entry, updatedDate: formattedDate, updatedTime: formattedTime});
    });
    request.send();
  }

// 2019-01-15T09:08:20-07:00

  render() {
    return(
      <Fragment>
        <h1>iTunes Top 20</h1>
        <h3>Last updated on: {this.state.updatedDate} at {this.state.updatedTime}</h3>
        <SongList songs={this.state.songs}/>
      </Fragment>
    )
  }

}

export default SongContainer;
