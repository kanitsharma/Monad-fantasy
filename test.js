const Maybe = require('./maybe')
const { Right, Left } = require('./either')

const eitherCall = x => x ? Right(x) : Left(x)

const res1 = Maybe(10)
  .map(x => x*10)
  .chain(x => Maybe(x*100))
  .map(x => x*10)
  .fold()

const res2 = eitherCall(20)
  .map(x => x * 10)
  .fold(
    _ => 'error',
    x => x
  )

console.log(res1, res2)