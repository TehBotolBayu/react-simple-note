import React, {useState} from 'react';
import sun from '../image/sun.png';
import moon from '../image/moon.png';

const Header = ({mode, switchMode}) => {
  const [logo, setLogo] = useState(sun);
  const modeHandler = () => {
    switchMode();
    if (logo == sun) setLogo(moon);
    else setLogo(sun);
  };
  return (
    <div className="note-app__header">
      <h1 style={mode}>Catatanku</h1>
      <button onClick={modeHandler} style={{width: '50px'}}>
        <img width={'20px'} src={logo} alt='mode'></img>
      </button>
    </div>
  );
};

export default Header;
