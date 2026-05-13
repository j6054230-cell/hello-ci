const TodoList = require('../src/todo');

describe('TodoList Lifecycle Testi', () => {
  let todoList;

  beforeAll(() => {
    console.log('\n--- Test paketi boshlandi ---');
  });

  beforeEach(() => {
    // Har testdan oldin yangi ro'yxat yaratiladi. 
    // Bu testlar bir-biriga xalaqit bermasligini ta'minlaydi.
    todoList = new TodoList();
    console.log('-> Yangi TodoList obyekti yaratildi');
  });

  afterEach(() => {
    console.log('<- Test tugadi, tozalash bajarildi');
  });

  afterAll(() => {
    console.log('--- Barcha testlar tugadi ---\n');
  });

  test('todo qo\'shishni tekshirish', () => {
    todoList.add('Dars qilish');
    expect(todoList.count()).toBe(1);
  });

  test('todo o\'chirishni tekshirish', () => {
    todoList.add('Mashq qilish');
    todoList.remove(0);
    expect(todoList.count()).toBe(0);
  });
});

