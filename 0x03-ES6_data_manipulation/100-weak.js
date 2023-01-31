const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 0);
  }

  let no = weakMap.get(endpoint);
  if (weakMap.has(endpoint) && no <= 4) {
    weakMap.set(endpoint, no += 1);
  } else {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
