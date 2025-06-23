import { useEffect, useState } from 'react';
import { Shortcut } from '../Shortcut/Shortcut';
import myComputerIcon from '../../assets/images/computer.png';
import folderIcon from '../../assets/images/folder.png';
import resumeIcon from '../../assets/images/resume.png';
import fileIcon from '../../assets/images/file.png';

import './Desktop.scss';
import { Window } from '../Window/Window';

export const Desktop = ({handleOpenWindow, handleCloseWindow,win,setWindow}) => {
  const [selected, setSelected] = useState(null);
  const [app,setApp] = useState(win);
  const children = {
    'Resume': [{title:'Resume', icon:fileIcon}],
    'Games': [{title:'Snake', icon:resumeIcon}, {title:'Mines', icon:resumeIcon}],
    'My Bio': 'this is some bio',
  }
 
  useEffect(()=>{
    setApp(win);
  },[win]);
  const handleDoubleClick = (win) =>{
    setApp(win);
    setWindow(win);
    handleOpenWindow({title:win, icon:handleWinIcon(win)});
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

  const handleWinIcon = (_app=undefined)=>{
   const temp = _app ? _app : app;
    switch (temp) {
      case 'My Bio':
        return myComputerIcon;           
      case 'Resume':
        return resumeIcon; 
      case 'Games':
        return folderIcon; 
    }
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

      {app && <Window type={app==='My Bio'?'file':'folder'} children={children[app]} icon={handleWinIcon()} close={handleClose} hide={handleHide} title={app}  handleCloseWindow = {handleCloseWindow}/>}
    </div>
  );
};
