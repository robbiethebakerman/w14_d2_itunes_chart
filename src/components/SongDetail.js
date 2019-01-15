import React, {Fragment} from 'react';

const SongDetail = ({song, position}) => {
  const songNameProperty = "im:name";

  return (
    <Fragment>
      <h2>{position}</h2>
      <h3>{song['im:name'].label}</h3>
      <h4>{song['im:artist'].label}</h4>
    </Fragment>
  )
}

export default SongDetail;
