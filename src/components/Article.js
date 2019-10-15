import React from 'react';

const Article = ({ title, children }) => (
    <div>
        <h1>{title}</h1>
        {children}
    </div>
);

export default Article;
