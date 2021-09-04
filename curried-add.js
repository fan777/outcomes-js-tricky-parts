function curriedAdd(total) {
  let currTotal = total;
  if (currTotal === undefined)
    return 0

  return function add(total) {
    if (total === undefined)
      return currTotal
    else {
      currTotal += total
      return add
    }
  }
}

module.exports = { curriedAdd };
