import './Window.scss';
import { useState } from 'react';

export const Window = ({
  title = "Untitled",
  type = "folder", // "folder" | "file"
  icon,
  close,
  hide,
  children,
}) => {
  const [maximized, setMaximized] = useState(false);

  return (
    <div className={`xp-window xp-window--${type} ${maximized ? 'xp-window--maximized' : ''}`}>
      <div className="xp-window__titlebar">
        {icon && <img src={icon} className="xp-window__icon" alt="icon" />}
        <span className="xp-window__title">{title}</span>
        <button onClick={() => hide(title)} className="xp-window__close">🗕</button>
        <button onClick={() => setMaximized(!maximized)} className="xp-window__close">🗖</button>
        <button onClick={() => close(title)} className="xp-window__close">✕</button>
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
    </div>
  );
};
