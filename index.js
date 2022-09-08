function add(a, b){
return a + b;
}
function subtract(b, a){
return b - a;
}
function multiply(a, b){
return a * b;
}
function divide(a, b){
return a / b;
}

function increment(a){
    return (a += 1);
}
function decrement(a){
    return (a -= 1);
}
function makeInt(n){
return parseInt(n)
}
function makeInt(n){
    return parseInt(n, 10)
}
describe('preserveDecimal(n)', function() {
    it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
      expect(preserveDecimal('2.222')).toBe(2.222)
    })
  
    it('returns NaN as appropriate', function() {
      expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
    })
  })
  function preserveDecimal(n) {
    return parseFloat(n)
  }