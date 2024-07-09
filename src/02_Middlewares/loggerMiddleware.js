const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Prev state:', store.getState());
  console.log('Dispatching:', action);
  let result = next(action); // Pass the action to the next middleware/reducer
  console.log('Next state:', store.getState());
  return result; // Return the result from next(action) to next middlewares
};

export default loggerMiddleware;
