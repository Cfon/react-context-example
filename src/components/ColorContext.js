import React, { createContext, useContext } from 'react';

const defaultColor = {
    color: 'white',
    background: 'blue',
};

const ColorContext = createContext(defaultColor);
const { Provider: ColorProvider, Consumer: ColorConsumer } = ColorContext;

const withColorContext = WrappedComponent => {
    return props => {
        const { color, background } = useContext(ColorContext);
        return (
            <WrappedComponent
                {...props}
                color={color}
                background={background}
            />
        );
    };
};

export { ColorProvider, ColorConsumer, withColorContext };
export default ColorContext;
