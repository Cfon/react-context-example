import { createContext } from 'react';

const defaultColor = {
    color: 'white',
    background: 'blue',
};

const ColorContext = createContext(defaultColor);
const { Provider, Consumer } = ColorContext;

export { Provider, Consumer };
export default ColorContext;
