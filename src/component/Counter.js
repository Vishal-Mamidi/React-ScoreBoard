import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const Counter = ({index}) => {
        return (
            <Consumer>
                { context => (
                    <div className="counter">
                        <button className="counter-action decrement" onClick={() => context.actions.changeScore(index,-1)} > - </button>
                        <span className="counter-score">{context.players[index].score}</span>
                        <button className="counter-action increment" onClick={() => context.actions.changeScore(index,1)} > + </button>
                    </div> 
                )}
            </Consumer>
        );
    } 

    Counter.propTypes = {
        index: PropTypes.number,
    };

  export default Counter;