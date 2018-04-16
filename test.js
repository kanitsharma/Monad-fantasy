const Maybe = require('./maybe-class')

const res = Maybe(10)
  .map(x => x*10)
  .chain(x => Maybe(x*100))
  .map(async x => x*10)
  .fold()
  .then(console.log)

console.log(res)