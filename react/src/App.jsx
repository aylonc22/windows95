
import { Desktop } from './components/desktop/Desktop';
import { StartMenu } from './components/startMenu/StartMenu';
import { Taskbar } from './components/taskbar/Taskbar';
import { Windows } from './components/Windows/Windows';
import './styles/main.scss';
import { useState } from 'react';

function App() {
  const [startOpen, setStartOpen] = useState(false);
  const [windows,setWindows] = useState([]);  
  const [activeWindow,setActiveWindow] = useState(null);

  const handleOpenWindow = (window)=>{
    if(!windows.find((win)=>window.title === win.title)){
        setWindows(prev=>[...prev,window]);
    }else{
       const temp = [...windows];      
       temp[temp.findIndex(win => win.title === window.title)].hide = false;
       setWindows(temp);
    }
  }  

  return (
    <div onClick={()=>startOpen && setStartOpen(false)} className="app">
      <Desktop  setActiveWindow={setActiveWindow} handleOpenWindow={handleOpenWindow}/>
      {startOpen && <StartMenu  handleOpenWindow={handleOpenWindow}/>}
      <Taskbar onStartClick={() => setStartOpen(!startOpen)}  setActiveWindow={setActiveWindow} openWindows={windows} setWindows = {setWindows}/>
        <Windows
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
        windows={windows}        
        setWindows={setWindows}
        />
    </div>
  );
}

export default App;