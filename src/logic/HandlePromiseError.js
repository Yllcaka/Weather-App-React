const handleError = (fn) => {
  return (...args) => {
    return fn(...args).catch((e) => alert(e));
  };
};

export { handleError };
