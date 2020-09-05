import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };

  const [title, setTitle] = useState('');

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor=''>Song name</label>
      <input
        type='text'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type='submit' value='Add song' />
    </form>
  );
};

export default NewSongForm;
