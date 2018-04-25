const Maybe = require('./maybe')
const { Right, Left } = require('./either')
const IO = require('./IOmonad')
const Task = require('data.task')
const State = require('./state')
const yieldTask = require('yieldtask')

const eitherCall = x => x ? Right(x) : Left(x)

const res1 = Maybe(10)
  .map(x => x * 10)
  .chain(x => Maybe(x * 100))
  .map(x => x * 10)
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

const httpGet = x =>
  new Task((rej, res) => {
    res('hello')
  })

const increment = x => x + 1

const res3 = sideEffectIO(1)
  .map(increment)
  .chain(sideEffectIO)
  .map(increment)
  .chain(sideEffectIO)

const res5 = State(s => ([s, s ]))
  .map(x => x + 10)
  .chain(x => State(s => [ x, x + s ]))
  .runState(30)

//  console.log(res1, res2)
// console.log(res4)

// httpGet :: () -> Task
// const res4 = httpGet()
//   .map(x => State(s => ([ x, s ])))
//   .map(x => x + '!')(State)
//   .chain(state => new Task((rej, res) => {
//     res(
//       state
//         .map(x => x + '!!')
//         .chain(x => State(s => ([ x, x ])))
//     )
//   }))
//   .fork(
//     err => console.log(err),
//     state => console.log(state.runState(null))
//   )

const testTask = a => Task.of(a)
  .map(x => x + 5)

function * test () {
  const a = yield yieldTask(testTask, 10)
  yield a
}

test().next()
console.log(test().next())
