import { useEffect, useState } from 'react';
import { Shortcut } from '../Shortcut/Shortcut';
import myComputerIcon from '../../assets/images/computer.png';
import folderIcon from '../../assets/images/folder.png';
import resumeIcon from '../../assets/images/resume.png';

import './Desktop.scss';

export const Desktop = ({handleOpenWindow}) => {
  const [selected, setSelected] = useState(null);
 
  const handleDoubleClick = (win) =>{       
    handleOpenWindow({title:win, icon:handleWinIcon(win), hide:false});
  }
  

  const handleWinIcon = (app=undefined)=>{
  
    switch (app) {
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

    </div>
  );
};
