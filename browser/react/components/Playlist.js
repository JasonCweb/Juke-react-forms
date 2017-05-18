import React from 'react'
import Songs from './Songs'

class Playlist extends React.Component {
  constructor(){
    super();

  }
componentDidMount() {
  this.props.setPlaylist(this.props.routeParams.playlistId)
}
componentWillReceiveProps(newProps) {
  if( newProps.routeParams.playlistId !== this.props.routeParams.playlistId )
    this.props.setPlaylist(newProps.routeParams.playlistId);
}
  render() {
    const playlist = this.props.selectedPlaylist;
    return (
              <div>
                <h3>{ playlist.name }</h3>
                <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
                { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
                <hr />
              </div>
    );
  }
}
export default Playlist;
