// You can use use IO monad to handle side effects of our application
// instead of using promise and complicating the app

const IO = g => {
  const map = f => IO(_ => f(g()))
  const chain = f => IO(_ => f(g())).run()
  const run = _ => g() 

  return { map, chain, run }
}

module.exports = IO