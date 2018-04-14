module.exports = Maybe = x => ({
  of: x => Maybe(x),
  isNothing: () => x === null || x === undefined,
  map: f => x === null || x === undefined ? Maybe(null) : Maybe(f(x)),
  chain: f => x === null || x === undefined ? Maybe(null) : Maybe(f(x)).fold(),
  fold: () => x,
  inspect: () => `Maybe(${x})`
})