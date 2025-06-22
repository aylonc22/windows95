import './Taskbar.scss';

export const Taskbar = ({ onStartClick }) => {
  return (
    <div className="taskbar">
      <button className="start-button" onClick={onStartClick}>
        Start
      </button>
    </div>
  );
};