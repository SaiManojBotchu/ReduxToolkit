// https://www.youtube.com/watch?v=5yEG6GhoJBs
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/counterSlice';

function App() {
  // 5.Subscribing to the store using a Selector
  const count = useSelector((store) => store.counter.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment()); // Dispatch an action
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
