const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator Tests', () => {
  test('qo\'shishni tekshirish', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('ayirishni tekshirish', () => {
    expect(subtract(10, 5)).toBe(5);
  });

  test('ko\'paytirishni tekshirish', () => {
    expect(multiply(4, 2)).toBe(8);
  });

  test('bo\'lishni tekshirish', () => {
    expect(divide(10, 2)).toBe(5);
  });

  // BRANCH COVERAGE UCHUN MUHIM:
  test('nolga bo\'lish xatolik berishi kerak', () => {
    expect(() => divide(10, 0)).toThrow("Nolga bo'lish mumkin emas");
  });
});
