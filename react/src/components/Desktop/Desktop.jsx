import { useState } from 'react';
import { Shortcut } from '../Shortcut/Shortcut';
import myComputerIcon from '../../assets/images/computer.png';
import './Desktop.scss';
import { Window } from '../Window/Window';

export const Desktop = ({handleOpenWindow, handleCloseWindow}) => {
  const [selected, setSelected] = useState(null);
  const [app,setApp] = useState(null)

  const handleDoubleClick = (window) =>{
    setApp(window);
    handleOpenWindow({title:window, icon:myComputerIcon});
  }
  
  const handleClose = (window) =>{
      setApp();
      handleDoubleClick(window);
  }

  return (
    <div className="desktop" onClick={() => setSelected(null)}>
      <Shortcut
        icon={myComputerIcon}
        label="My Computer"
        onDoubleClick={() => handleDoubleClick('My Computer')}
        selected={selected === 'my-computer'}
        onClick={(e) => {
          e.stopPropagation(); // prevent deselect from parent
          setSelected('my-computer');
        }}       
      />

      {app && <Window close={handleClose} title={app}  handleCloseWindow = {handleCloseWindow}/>}
    </div>
  );
};
