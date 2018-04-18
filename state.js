function tate(s) {
  this.runState = s;
}

State.prototype = {
  map: function(f) {
    var runState = this.runState;
    return new State(function(state) {
      var prev = runState(state);
      return { value: f(prev.value), state: prev.state };
    });
  },

  join: function() {
    var runState = this.runState;
    return new State(function(state) {
      var prev = runState(state);
      var inner = prev.value.runState(prev.state);
      return inner;
    });
  },

  bind: function(f) {
    return this.map(f).join();
  },

  evalState: function(initState) {
    var result = this.runState(initState);
    return result.value;
  },

  execState: function(initState) {
    var result = this.runState(initState);
    return result.state;
  }
};

const State = s => {
  const map = f => Stte()) 
}<Up>
