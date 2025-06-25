import './Window.scss';
import { useRef, useState } from 'react';

export const Window = ({
  title = "Untitled",
  type = "folder", // "folder" | "file"
  icon,
  close,
  hide,
  children,
  isActive,
  onClick,
}) => {
  const [maximized, setMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const windowRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    if (maximized) return; // Disable dragging when maximized
    isDragging.current = true;

    const rect = windowRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || maximized) return;

    const win = windowRef.current;
    const winWidth = win.offsetWidth;
    const winHeight = win.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let newX = e.clientX - offset.current.x;
    let newY = e.clientY - offset.current.y;

    const margin = 1;
    newX = Math.max(margin, Math.min(newX, screenWidth - winWidth - margin));
    newY = Math.max(0, Math.min(newY, screenHeight - winHeight - 41));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={windowRef}
      className={`xp-window xp-window--${type} ${maximized ? 'xp-window--maximized' : ''} ${isActive ? 'xp-window--active' : ''}`}
      onMouseDown={onClick}
      style={!maximized ? { top: position.y, left: position.x } : {}}
    >
      <div className="xp-window__titlebar" onMouseDown={handleMouseDown}>
        {icon && <img src={icon} className="xp-window__icon" alt="icon" />}
        <span className="xp-window__title">{title}</span>
        <button onClick={() => hide(title)} className="xp-window__close">🗕</button>
        <button onClick={() => setMaximized(!maximized)} className="xp-window__close">🗖</button>
        <button onClick={() => close(title)} className="xp-window__close">✕</button>
      </div>

      <div className="xp-window__menubar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Help</span>
      </div>

      <div className="xp-window__content">
        {type === 'folder' && Array.isArray(children) ? (
          <div className="xp-window__folder-view">
            {children.map((item, i) => (
              <div key={i} className="xp-window__folder-item">
                <img src={item.icon} alt={item.title} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        ) : (
          <pre className="xp-window__file-view">{children}</pre>
        )}
      </div>

      {type === 'folder' && Array.isArray(children) && (
        <div className="xp-window__statusbar">
          {children.length} item{children.length !== 1 ? 's' : ''}, {children.length * 4} KB
        </div>
      )}
    </div>
  );
};
