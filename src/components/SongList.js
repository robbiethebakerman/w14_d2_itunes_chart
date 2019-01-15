import React, {Fragment} from 'react';
import SongDetail from './SongDetail';

const SongList = ({songs}) => {
  const songDetailNodes = songs.map((song, index) => {
    return <SongDetail song={song} position={index + 1}></SongDetail>
  });

  return (songDetailNodes)
}

export default SongList;
