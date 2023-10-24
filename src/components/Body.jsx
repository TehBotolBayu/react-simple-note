import React, {useContext, useState} from 'react';
import Notes from './Notes';
import {NoteContext} from './App';
import NoteInput from './NoteInput';
import Search from './Search';
import Modal from 'react-modal';


Modal.setAppElement('#modal');

const Body = ({mode}) => {
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50vw',
      backgroundColor: mode.backgroundColor,
    },
  };
  const {data, searchKey} = useContext(NoteContext);
  const [show, setShow] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const showNote = () => {
    setShow(true);
  };

  const showArchive = () => {
    setShow(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="note-app__body" >
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
      >
        <NoteInput mode={mode} modal={setModalOpen} />
      </Modal>
      <Search mode={mode} />
      <div className='note-input'>
        <button style={mode} onClick={openModal}>Buat Catatan Baru</button>
      </div>
      <div className='notelist-heading'>
        <h2>Selamat datang di Catatanku</h2>
        <button style={mode} onClick={showNote}>Catatan Aktif</button>
        <button style={mode} onClick={showArchive}>Arsip Catatan</button>
      </div>
      <div style={{display: (show)? 'block':'none'}}>
        <Notes mode={mode} status={'aktif'} notes={data.filter((note) => {
          return (note.archived === false && note.title.toLowerCase()
              .search(searchKey.toLowerCase()) > -1);
        })} />
      </div>
      <div style={{display: (!show)? 'block':'none'}}>
        <Notes mode={mode} status={'terarsip'} notes={data.filter((note) => {
          return (note.archived === true && note.title.toLowerCase()
              .search(searchKey.toLowerCase()) > -1);
        })} />
      </div>
    </div>
  );
};

export default Body;
