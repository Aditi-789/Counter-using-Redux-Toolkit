import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/Slices/CounterSlice';
import './Counter.css'; // Create this CSS file

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-title">Redux Counter</h1>
      
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      
      <div className="counter-buttons">
        <button 
          className="counter-button increment"
          onClick={() => dispatch(increment())}
        >
          <span>+</span>
        </button>
        
        <button 
          className="counter-button decrement"
          onClick={() => dispatch(decrement())}
        >
          <span>-</span>
        </button>
      </div>
      
      <div className="counter-message">
        {count > 10 ? "Wow! Big number!" : count < 0 ? "Negative? Interesting!" : "Keep clicking!"}
      </div>
    </div>
  );
};

export default Counter;