import React from 'react';
import Note from './Note';

const Notes = ({notes, status, mode}) => {
  if (notes.length <= 0) {
    return (
      <div className='notes-list'>
        <p>Tidak ada catatan {status}</p>
      </div>
    );
  }
  return (
    <>
      <div className='notes-list'>
        {
          notes.map((note) => {
            return (
              <Note mode={mode} note={note} key={note.id}/>
            );
          })
        }
      </div>
    </>
  );
};

export default Notes;
