import './Window.scss';

export const Window = ({ title = "Untitled", close , children, hide }) => {
  return (
    <div className="xp-window">
      <div className="xp-window__titlebar">
        <span className="xp-window__title">{title}</span>
        <button onClick={()=>hide(title)} className="xp-window__close">—</button>
        <button onClick={()=>close(title)} className="xp-window__close">✕</button>
      </div>
      <div className="xp-window__content">
        {children || "This is window content."}
      </div>
    </div>
  );
};
