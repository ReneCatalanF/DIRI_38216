import React, { useState, useEffect } from 'react';
import './Reloj.css'


const Reloj_Personal = () => {
  const [current_time, setcurrent_time] = useState(new Date());
  const [savedTimes, setSavedTimes] = useState<string[]>(() => {
    const current_time = localStorage.getItem('savedTimes');
    return current_time ? JSON.parse(current_time) : [];
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
        setcurrent_time(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    localStorage.setItem('savedTimes', JSON.stringify(savedTimes));
  }, [savedTimes]);

  const tiempo_mapeado = current_time.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const handleguardarTiempo = () => {
    setSavedTimes([...savedTimes, tiempo_mapeado]);
  };

  const handleeliminarTiempo = (indexToDelete: number) => {
    setSavedTimes(savedTimes.filter((_, index) => index !== indexToDelete));
  };


  return (
    <div className="reloj-container">
    <h1 className="reloj-titulo">Reloj Personal</h1>
  <div className="hora-display">
    <p className="hora-actual">{tiempo_mapeado}</p>
  </div>
  <button className="guardar-boton" onClick={handleguardarTiempo}>Guardar instante</button>
  <div className="instantes-guardados-display">
      <h2>Instantes guardados:</h2> {/* Puedes quitar este h2 si no lo necesitas */}
    <ul className="instantes-guardados-lista">
      {savedTimes.map((time, index) => (
        <li key={index}>
        {time}
        <button className="borrar-boton" onClick={() => handleeliminarTiempo(index)}>
          Borrar
        </button>
      </li>
        
      ))}
    </ul>
  </div>
</div>
  );
};

export default Reloj_Personal;