import { useState } from 'react';
import { Shortcut } from '../Shortcut/Shortcut';
import myComputerIcon from '../../assets/images/computer.png';
import './Desktop.scss';
import { Window } from '../Window/Window';

export const Desktop = () => {
  const [selected, setSelected] = useState(null);
  const [app,setApp] = useState(null)

  return (
    <div className="desktop" onClick={() => setSelected(null)}>
      <Shortcut
        icon={myComputerIcon}
        label="My Computer"
        onDoubleClick={() => setApp('My Computer')}
        selected={selected === 'my-computer'}
        onClick={(e) => {
          e.stopPropagation(); // prevent deselect from parent
          setSelected('my-computer');
        }}
      />

      {app && <Window close={()=>setApp()} title={app}/>}
    </div>
  );
};
