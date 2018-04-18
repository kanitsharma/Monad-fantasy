const State = runState => {
  const map = f => State(state => {
    const prevState = runState(state)
    return { value: f(prevState.value), state: prevState.state }
  })

  
  const fold = () => State(state => {
    const prevState = runState(state)
    return prevState.value.runState(prevState.state)
  })

  const chain = f => map(f).fold()

  const evalState = initState => runState(initState).value

  const execState = initState => runState(initState).state

  return { map, fold, chain, evalState, execState }
}