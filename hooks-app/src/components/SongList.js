import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import NewSongForm from './NewSongForm';
const SongList = () => {
  const [songList, setSong] = useState([
    { title: 'this wild darkness', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'almost home', id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSong([...songList, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log('useEffect fired.');
  }, [songList]);

  const renderedSongList = songList.map((song) => (
    <li key={song.id}>{song.title}</li>
  ));

  return (
    <div key className='song-list'>
      <ul>{renderedSongList}</ul>

      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add to age {age}</button>
    </div>
  );
};

export default SongList;
