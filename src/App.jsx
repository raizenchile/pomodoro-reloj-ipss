import { useState } from 'react';
import Timer from './components/timer';
import Settings from './components/settings';

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-center w-full">Reloj Pomodoro</h1>
      <div className="w-full flex flex-col items-center gap-6 max-w-lg">
        <Timer workTime={workTime} breakTime={breakTime} />
        <Settings setWorkTime={setWorkTime} setBreakTime={setBreakTime} />
      </div>
      <div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Hecho con ❤️ por {'Sebastian Ortega'}</p>
          <a
            href=""></a>
      </div>
    </div>
  );
}



export default App;