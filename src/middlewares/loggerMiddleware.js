const myLogger = (store) => (next) => (action) => {
  console.log("Logged action:", action);
  next(action);
};

export default myLogger;