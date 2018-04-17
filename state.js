const State = s => {
  const store = {}

  const map = a => State(a(s))
  const fold = _ => s

}
