import React, { useState, useEffect } from 'react';


const Reloj_Personal = () => {
  const [current_time, setcurrent_time] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
        setcurrent_time(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const tiempo_mapeado = current_time.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div>
      <p>{tiempo_mapeado}</p>
    </div>
  );
};

export default Reloj_Personal;