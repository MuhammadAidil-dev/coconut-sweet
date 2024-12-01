import { useState } from 'react';

const useInput = () => {
  const [input, setInput] = useState('');

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  return [input, handleChangeInput];
};

export { useInput };
