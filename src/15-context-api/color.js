import { createContext, useState } from 'react';

// 동적 값
const ColorContext = createContext({
  state: { color: 'black', subColor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;

// 고정 값
// const ColorContext = createContext({ color: 'black' });

// export default ColorContext;
