
import { Desktop } from './components/desktop/Desktop';
import { StartMenu } from './components/startMenu/StartMenu';
import { Taskbar } from './components/taskbar/Taskbar';
import './styles/main.scss';
import { useState } from 'react';

function App() {
  const [startOpen, setStartOpen] = useState(false);
  const [windows,setWindows] = useState([]);
  const [win,setWindow] = useState();

  const handleOpenWindow = (window)=>{
    if(!windows.find((win)=>window.title === win.title)){
        setWindows(prev=>[...prev,window]);
    }
  }

   const handleCloseWindow = (window)=>{
    setWindows(prev=>prev.filter((win=> win.title != window.title )));
  }

  return (
    <div onClick={()=>startOpen && setStartOpen(false)} className="app">
      <Desktop handleOpenWindow={handleOpenWindow}  handleCloseWindow={handleCloseWindow}  win={win} setWindow={(win=>setWindow(win))}/>
      {startOpen && <StartMenu  handleOpenWindow={handleOpenWindow} setWindow={(win=>setWindow(win))}/>}
      <Taskbar onStartClick={() => setStartOpen(!startOpen)} openWindows={windows} setWindow = {(win)=>setWindow(win)}/>
    </div>
  );
}

export default App;