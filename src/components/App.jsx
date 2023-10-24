import React, {createContext, useState} from 'react';
import {getInitialData} from '../utils';

import Body from './Body';
import Header from './Header';

export const NoteContext = createContext();

const dark = {
  backgroundColor: '#202124',
  color: 'white',
};

const light = {
  backgroundColor: '#f1f3f7',
  color: 'rgb(39, 36, 36)',
  archive: {
    color: '#739df1',
  },
  delete: {
    color: 'rgb(39, 36, 36)',
  },
};

export const App = () => {
  const [data, setData] = useState(getInitialData());
  const [searchKey, setSearchKey] = useState('');

  const [mode, setMode] = useState(light);

  const switchMode = () => {
    if (mode == dark) setMode(light);
    else setMode(dark);
  };

  return (
    <div style={{...mode, height: '100vh'}}>
      <NoteContext.Provider value={{data, setData, searchKey, setSearchKey}}>
        <Header mode={mode} switchMode={switchMode}/>
        <Body mode={mode} />
      </NoteContext.Provider>
    </div>
  );
};
