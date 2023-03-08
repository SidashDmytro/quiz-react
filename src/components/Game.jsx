import React from 'react';

const Game = (props) => {

    let step = props.step;
    let variants = props.questions[step].variants;
    let title = props.questions[step].title;
    let percentage = step / props.questions.length * 100;

    let listVariants = variants.map((variant, index) =>
        <li key={variant} onClick={() => props.onClickVariant(index)}>{variant}</li>
    );

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{title}</h1>
            <ul>
                {listVariants}
            </ul>
        </>
    );
};

export default Game;