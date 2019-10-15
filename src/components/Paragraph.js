import React from 'react';

const Paragraph = ({ color, background, children }) => (
    <div style={{ backgroundColor: background }}>
        <span style={{ color }}>{children}</span>
    </div>
);

export default Paragraph;
