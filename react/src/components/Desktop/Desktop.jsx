import { useEffect, useState } from 'react';
import { Shortcut } from '../Shortcut/Shortcut';
import myComputerIcon from '../../assets/images/computer.png';
import folderIcon from '../../assets/images/folder.png';
import resumeIcon from '../../assets/images/resume.png';
import './Desktop.scss';
import { Window } from '../Window/Window';

export const Desktop = ({handleOpenWindow, handleCloseWindow,win,setWindow}) => {
  const [selected, setSelected] = useState(null);
  const [app,setApp] = useState(win);
 
  useEffect(()=>{
 console.log("WIN CHAGE")
    setApp(win);
  },[win]);
  const handleDoubleClick = (win) =>{
    setApp(win);
    setWindow(win);
    handleOpenWindow({title:win, icon:myComputerIcon});
  }
  
  const handleClose = (win) =>{
      setApp();
      setWindow();
      handleCloseWindow({title:win});
  }

  const handleHide = ()=>{
      setApp();
      setWindow();
  }

  return (
    <div className="desktop" onClick={() => setSelected(null)}>
      <Shortcut
        icon={myComputerIcon}
        label="My Bio"
        onDoubleClick={() => handleDoubleClick('My Bio')}
        selected={selected === 'my-bio'}
        onClick={(e) => {
          e.stopPropagation();
          setSelected('my-bio');
        }}       
      />

       <Shortcut
        icon={resumeIcon}
        label="Resume"
        onDoubleClick={() => handleDoubleClick('Resume')}
        selected={selected === 'resume'}
        onClick={(e) => {
          e.stopPropagation();
          setSelected('resume');
        }}       
      />

       <Shortcut
        icon={folderIcon}
        label="Games"
        onDoubleClick={() => handleDoubleClick('Games')}
        selected={selected === 'games'}
        onClick={(e) => {
          e.stopPropagation();
          setSelected('games');
        }}       
      />

      {app && <Window close={handleClose} hide={handleHide} title={app}  handleCloseWindow = {handleCloseWindow}/>}
    </div>
  );
};
