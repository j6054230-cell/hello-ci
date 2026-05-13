const db = require('./database');
async function getUserById(id) {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return user[0] || null;
}

// Test (database'ni mock qilish):
const db = require('./database');
jest.mock('./database');    // database.js ni to'liq mock qil

test('mavjud foydalanuvchini qaytaradi', async () => {
  // Mock'ga qaytarish qiymatini o'rnatish:
  db.query.mockResolvedValue([{ id: 1, name: 'Ali' }]);

  const user = await getUserById(1);

  expect(user).toEqual({ id: 1, name: 'Ali' });
  expect(db.query).toHaveBeenCalledWith(
    'SELECT * FROM users WHERE id = ?',
    [1]
  );
});
