import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, add_ten  } from './action';

function  Counter ({count, increment, decrement, reset, add_ten}) {
    return(
        <div>
            <h2>Счетчик: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Очистить</button>
            <button onClick={add_ten}>+10</button>
        </div>
    )
}
const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  add_ten
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);