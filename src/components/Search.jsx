import React, {useContext, useState} from 'react';
import {NoteContext} from './App';

const Search = ({mode}) => {
  const {setSearchKey} = useContext(NoteContext);
  const [key, setKey] = useState('');
  const searchNote = () => {
    setSearchKey(key);
  };

  return (
    <div className='note-input src'>
      <input
        type='text'
        className='.note-input__title__char-limit'
        placeholder='Cari'
        onInput={(event) => setKey(event.target.value)}
        style={mode}>
      </input>
      <button style={mode} onClick={searchNote}>Cari</button>
    </div>
  );
};

export default Search;
