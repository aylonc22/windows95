import { Window } from '../Window/Window';
import myComputerIcon from '../../assets/images/computer.png';
import folderIcon from '../../assets/images/folder.png';
import resumeIcon from '../../assets/images/resume.png';
import fileIcon from '../../assets/images/file.png';

const iconMap = {
  'My Bio': myComputerIcon,
  'Resume': resumeIcon,
  'Games': folderIcon,
};

const windowContent = {
  'My Bio': { type: 'file', content: 'This is some bio' },
  'Resume': { type: 'folder', content: [{ title: 'Resume', icon: fileIcon }] },
  'Games': { type: 'folder', content: [
    { title: 'Snake', icon: resumeIcon },
    { title: 'Mines', icon: resumeIcon }
  ] },
};
export const Windows = ({ windows, activeWindow, setActiveWindow, setWindows }) => {
 
  const handleClose = (title) => {    
    setWindows(prev => prev.filter(win => win.title !== title));      
  };

  const handleHide = (title) => {
   const temp = [...windows];   
   temp[temp.findIndex(win => win.title === title)].hide = true;

   setWindows(temp);
  };

  return (
    <>
      {windows.map(({title,hide}) => {       
        const data = windowContent[title];       
        return hide? null:(
          <Window
            key={title}
            title={title}
            icon={iconMap[title]}
            type={data.type}
            children={data.content}
            close={() => handleClose(title)}
            hide={() => handleHide(title)}
            isActive={activeWindow === title}
            onClick={() => setActiveWindow(title)}
          />
        );
      })}
    </>
  );
};
