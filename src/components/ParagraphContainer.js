import React, { useContext } from 'react';
import ColorContext from './ColorContext';
import Paragraph from './Paragraph';

const ParagraphContainer = ({ children }) => {
    const { color, background } = useContext(ColorContext);
    return (
        <div>
            <Paragraph color={color} background={background}>
                {children}
            </Paragraph>
        </div>
    );
};

export default ParagraphContainer;
