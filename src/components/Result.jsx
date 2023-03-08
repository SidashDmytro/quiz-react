import React from 'react';

const Result = (props) => {
    return (
        <div className="result">
            <img alt='' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Правильных ответов: {props.result}  (из {props.numberOfCards} )</h2>
            <button onClick={() => props.startGame()}>Попробовать снова</button>
        </div>
    );
};

export default Result;