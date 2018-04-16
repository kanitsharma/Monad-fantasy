const { IO } = require('monet')

// You can use use IO monad to handle side effects of our application
// instead of using promise and complicating the app

const sideEffectIO = x => IO(_ => {
  console.log('Hello I am side effect' + x)
  return x
})

const increment = x => x + 1

sideEffectIO(1)
  .map(increment)
  .flatMap(sideEffectIO)
  .map(increment)
  .flatMap(sideEffectIO)
  .run()