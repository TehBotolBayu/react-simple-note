import React, {useContext} from 'react';
import {showFormattedDate} from '../utils';
import {NoteContext} from './App';

const Note = ({note, mode}) => {
  const {data, setData} = useContext(NoteContext);

  const deleteNote = (id) => {
    setData(data.filter((note) => note.id != id));
  };

  const archiveNote = (id) => {
    const newData = data.map((note) => {
      if (note.id == id) {
        note.archived = !note.archived;
      }
      return note;
    });
    setData([...newData]);
  };
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        {
                    note.archived === false ?
                    <button className="note-item__archive-button" onClick={() => archiveNote(note.id)} style={mode.archive}>Archive</button> :
                    <button className="note-item__archive-button" onClick={() => archiveNote(note.id)} style={mode.archive}>Unarchive</button>
        }
        <button className="note-item__delete-button" onClick={() => deleteNote(note.id)} style={mode.delete}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
