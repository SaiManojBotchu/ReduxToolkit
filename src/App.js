// https://www.youtube.com/watch?v=5yEG6GhoJBs
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './01_Redux/counterSlice';

// {/* 5. provide store to the parent componet (index.js) */}

function App() {
  // 6. Subscribing store (useSelector)
  const count = useSelector((store) => store.counter.count);

  // 7. For dispatching actions (useDispatch)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment()); // Dispatch an action
    // dispatch(increment(5)); // payload - 5
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Redux Toolkit Tutorial</h1>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
