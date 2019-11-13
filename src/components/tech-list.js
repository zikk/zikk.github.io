import React from 'react'

export default ({techs}) => (
    <p className="tech-list">
        {techs.map(techName => <span className="tech-item">{techName}</span>)}
    </p>
)