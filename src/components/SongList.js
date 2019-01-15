import React, {Fragment} from 'react';
import SongDetail from './SongDetail';

const SongList = ({songs}) => {
  const songDetailNodes = songs.map((song) => {
    return <SongDetail song={song}></SongDetail>
  });

  return (songDetailNodes)
}

export default SongList;
