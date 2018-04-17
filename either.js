const Right = x => ({
  map: fn => Right(fn(x)),
  fold: (f, g) => g(x),
  inspect: _ => `Right(${x})`
})

const Left = x => ({
  map: fn => Left(x),
  fold: (f, g) => f(x),
  inspect: _ => `Right(${x})`,
})

module.exports = { Right, Left }
