const Maybe = require('./maybe-class')

const res = Maybe(10)
  .map(x => x*10)
  .map(x => Maybe(x*100))
  .inspect()

console.log(res)