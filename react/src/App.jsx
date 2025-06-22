
import { Desktop } from './components/desktop/Desktop';
import { StartMenu } from './components/startMenu/StartMenu';
import { Taskbar } from './components/taskbar/Taskbar';
import './styles/main.scss';
import { useState } from 'react';

function App() {
  const [startOpen, setStartOpen] = useState(false);

  return (
    <div className="app">
      <Desktop />
      {startOpen && <StartMenu />}
      <Taskbar onStartClick={() => setStartOpen(!startOpen)} />
    </div>
  );
}

export default App;