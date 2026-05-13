const square = require('../src/math');

describe('Math funksiyalari', () => {
  test('sonning kvadratini to\'g\'ri hisoblaydi', () => {
    // Arrange
    const input = 4;
    // Act
    const result = square(input);
    // Assert
    expect(result).toBe(16);
  });
});
