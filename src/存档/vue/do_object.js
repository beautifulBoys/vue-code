
export default (active) => {
  for (let k in active.data) {
    active[k] = active.data[k];
  }
  for (let k in active.methods) {
    active[k] = active.methods[k];
  }
  return active;
};
