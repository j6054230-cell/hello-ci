function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Nolga bo\'lish mumkin emas');
  }
  return a / b;
}

module.exports = { add, divide };
