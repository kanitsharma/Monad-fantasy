const Maybe = x => {
  const of = x => Maybe(x)
  const isNothing = _ => x === null || x === undefined
  const map = f => isNothing() ? Maybe(null) : Maybe(f(x))
  const chain = f => x === null || x === undefined ? Maybe(null) : Maybe(f(x)).fold()
  const fold = _ => x
  const inspect = _ => `Maybe(${x})`

  return { of, isNothing, map, chain, fold, inspect }
}

module.exports = Maybe 