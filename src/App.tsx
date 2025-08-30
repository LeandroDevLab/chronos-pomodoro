import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { useState } from 'react';
import { TaskContext } from './contexts/TaskContext';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaing: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);
  // o Provider é quem vai prover as informações de value para o componente e seus filhos!
  return (
    <TaskContext.Provider value={{ esseQueVaiValer: 321 }}>
      <Home />
    </TaskContext.Provider>
  );
}
