import { useState, useEffect } from 'react';

const Timer = ({ workTime, breakTime }) => {
  const [time, setTime] = useState(workTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false); // Estado para el popup

  useEffect(() => {
    setTime(workTime * 60); // Actualizar tiempo si cambia la configuración
  }, [workTime]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev === 1) {
            setIsTimeUp(true); // Activar popup cuando el tiempo llegue a 0
          }
          return prev > 0 ? prev - 1 : 0;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleClosePopup = () => {
    setIsTimeUp(false); // Cerrar el popup
    setIsRunning(false); // Detener el temporizador si está corriendo
  };
  return (
    <div className="w-full max-w-lg flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-5xl font-bold text-gray-800 mb-4">
        {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}
      </h2>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        {isRunning ? 'Pausar' : 'Iniciar'}
      </button>

      {/* Popup de fin de tiempo */}
      {isTimeUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">¡Tiempo Terminado!</h3>
            <p className="text-gray-600">¡Tu sesión ha finalizado!</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
