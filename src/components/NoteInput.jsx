import React, {useContext, useState} from 'react';
import {NoteContext} from './App';

const NoteInput = ({modal, mode}) => {
  const {data, setData} = useContext(NoteContext);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = () => {
    if (title == '') {
      alert('Judul tidak boleh kosong');
      return;
    }
    if (body == '') {
      alert('Deskripsi catatan tidak boleh kosong');
      return;
    }
    try {
      const newNote = {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toString(),
        archived: false,
      };
      data.push(newNote);
      setData([...data]);
      alert('Catatan berhasil disimpan');
      setTitle('');
      setBody('');
      modal(false);
    } catch (error) {
      alert('Terjadi kesahalan saat menyimpan catatan!');
    }
  };

  const checkTitle = (event) => {
    if (event.target.value.length > 50) {
      alert('Panjang judul tidak boleh lebih dari 50');
      event.target.value = title;
      return;
    }
    setTitle(event.target.value);
  };

  return (
    <>
      <div className='note-input' style={mode}>
        <div className='note-input__title'>Tambah Catatan Baru</div>

        <div className='note-input__title__char-limit'>
          Panjang judul: {title.length}/50
        </div>
        <input
          type='text'
          className='.note-input__title__char-limit'
          placeholder='Judul'
          onInput={() => checkTitle(event)}
          style={mode}>
        </input>

        <textarea
          placeholder='Deskripsi'
          onInput={(event) => setBody(event.target.value)}
          style={mode}>
        </textarea>
        <button style={mode} onClick={addNote}>Tambah</button>
      </div>
    </>
  );
};

export default NoteInput;
