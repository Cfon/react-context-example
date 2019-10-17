import React from 'react';
import { withColorContext } from './ColorContext';

export const Paragraph = ({ color, background, children }) => (
    <div style={{ backgroundColor: background }}>
        <span style={{ color }}>{children}</span>
    </div>
);

export default withColorContext(Paragraph);
