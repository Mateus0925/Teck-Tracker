import React, { useEffect, useState } from 'react';

const palavras = ["Velocidade", "Tecnologia", "Locação de Equipamentos", "Segurança", "Eficiência"];

function PalavraAnimada() {
  const [index, setIndex] = useState(0);
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAnimar(true); // Ativa animação
      setTimeout(() => setAnimar(false), 500); // Remove para reiniciar

      setIndex((prev) => (prev + 1) % palavras.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <h1 className={`palavra ${animar ? 'pular' : ''}`}>
      {palavras[index]}
    </h1>
  );
}

export default PalavraAnimada;
