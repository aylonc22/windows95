import './Taskbar.scss';
import windowsIcon from '../../assets/images/win95.png'; // adjust the path if needed

export const Taskbar = ({ onStartClick, openWindows = [] }) => {
  return (
    <div className="taskbar">
      <button className="start-button" onClick={onStartClick}>
        <img src={windowsIcon} alt="Windows" />
        <span>Start</span>
      </button>

      <div className="taskbar__windows">
        {openWindows.map((win, index) => (
          <div key={index} className="taskbar__window-button">
            <img src={win.icon} alt="" />
            <span>{win.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
