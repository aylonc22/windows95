import './Taskbar.scss';
import windowsIcon from '../../assets/images/win95.png';

export const Taskbar = ({ onStartClick, openWindows = [] ,setWindows, setActiveWindow}) => {
console.log(openWindows);
const handleOpenWindow = (index) =>{
  const temp = [...openWindows]
 
   temp[index].hide = !temp[index].hide;
   setWindows(temp);
   setActiveWindow(temp[index].title)
}

  return (
    <div className="taskbar">
      <button className="start-button" onClick={onStartClick}>
        <img src={windowsIcon} alt="Windows" />
        <span>Start</span>
      </button>

      <div className="taskbar__windows">
        {openWindows.map((win, index) => (
          <div onClick={()=>handleOpenWindow(index)} key={index} className="taskbar__window-button">
            <img src={win.icon} alt="" />
            <span>{win.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
