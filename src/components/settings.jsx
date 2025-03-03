import { useState } from 'react';

const Settings = ({ setWorkTime, setBreakTime }) => {
  const [work, setWork] = useState(25);
  const [breakTime, setBreak] = useState(5);

  // Funciones para incrementar y decrementar los minutos
  const incrementWork = () => setWork((prev) => prev + 1);
  const decrementWork = () => setWork((prev) => (prev > 1 ? prev - 1 : 1)); // Evitar que sea menor que 1
  const incrementBreak = () => setBreak((prev) => prev + 1);
  const decrementBreak = () => setBreak((prev) => (prev > 1 ? prev - 1 : 1)); // Evitar que sea menor que 1

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkTime(work);
    setBreakTime(breakTime);
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">Configuración</h2> {/* Color del título cambiado */}
      <form onSubmit={handleSubmit}>
        {/* Tiempo de Trabajo */}
        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-700 font-semibold">Tiempo de Trabajo (minutos):</label> {/* Color del texto cambiado */}
          <div className="flex items-center justify-center space-x-3">
            <button
              type="button"
              onClick={decrementWork}
              className="px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-gray-400 transition"
            >
              -
            </button>
            <span className="w-16 text-xl font-semibold text-gray-800 text-center">{work}</span> {/* Color del número cambiado */}
            <button
              type="button"
              onClick={incrementWork}
              className="px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-gray-400 transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Tiempo de Descanso */}
        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-700 font-semibold">Tiempo de Descanso (minutos):</label> {/* Color del texto cambiado */}
          <div className="flex items-center justify-center space-x-3">
            <button
              type="button"
              onClick={decrementBreak}
              className="px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-gray-400 transition"
            >
              -
            </button>
            <span className="w-16 text-xl font-semibold text-gray-800 text-center">{breakTime}</span> {/* Color del número cambiado */}
            <button
              type="button"
              onClick={incrementBreak}
              className="px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-gray-400 transition"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Settings;
