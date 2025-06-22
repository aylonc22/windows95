import './Shortcut.scss';
import { useState } from 'react';

export const Shortcut = ({ icon, label, onDoubleClick, selected, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`shortcut ${selected ? 'selected' : ''} ${isActive ? 'active' : ''}`}
      onDoubleClick={onDoubleClick}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onClick={onClick}
    >
      <div className="shortcut__content">
        <img src={icon} alt={label} className="shortcut__icon" />
        <span className="shortcut__label">{label}</span>
      </div>
    </div>
  );
};
