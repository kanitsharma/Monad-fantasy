const Maybe = require('./maybe-class')

const res = Maybe(null)
  .map(x => x*10)

console.log(res)