const Maybe = require('./maybe')
const { Right, Left } = require('./either')
const IO = require('./IOmonad')
const Task = require('data.task')

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

const sideEffectIO = x => IO(_ => {
  console.log('Hello I am side effect' + x)
  return x
})

const httpGet = x => new Task((res, rej) => {
  setTimeout(_ => res('Side effect done'), 3000)
})

const increment = x => x + 1

const res3 = sideEffectIO(1)
  .map(increment)
  .chain(sideEffectIO)
  .map(increment)
  .chain(sideEffectIO)
  .run()

const res4 = httpGet()
  .map(x => x + 1)
  .fork(
    err => console.log(err),
    data => console.log(data)
  )

console.log(res1, res2, res3, res4)
