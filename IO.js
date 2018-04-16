const { IO } = require('monet')

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