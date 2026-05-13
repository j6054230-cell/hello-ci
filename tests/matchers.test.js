describe('Jest Matchers Tekshiruvi', () => {
  
  test('Oddiy qiymatlar va turlar', () => {
    expect(100).toBe(100);                         // toBe
    expect({ id: 1 }).toEqual({ id: 1 });          // toEqual
    expect(null).toBeNull();                       // toBeNull
    expect(undefined).toBeUndefined();             // toBeUndefined
  });

  test('Mantiqiy (Boolean) tekshiruvlar', () => {
    expect('Jamshid').toBeTruthy();                // toBeTruthy
    expect(0).toBeFalsy();                         // toBeFalsy
  });

  test('Massiv va Matnlar', () => {
    expect(['Linux', 'Docker', 'Jest']).toContain('Jest'); // toContain
    expect('DevOps').toHaveLength(6);                      // toHaveLength
  });

  test('Raqamlar va Xatolar', () => {
    expect(15).toBeGreaterThan(10);                // toBeGreaterThan
    const errorFn = () => { throw new Error('Xato!'); };
    expect(errorFn).toThrow();                     // toThrow
  });

});
