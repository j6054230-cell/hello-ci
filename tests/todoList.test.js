 TodoList
    add()
      v yangi todo qo'shadi va id beradi (2ms)
      v bir nechta todo qo'shiladi (1ms)
      v bo'sh matn xato beradi (1ms)
      v har todo noyob id oladi (1ms)
    remove()
      v mavjud todo'ni o'chiradi (1ms)
      v yo'q id xato beradi (1ms)
    complete()
      v done=true qiladi (1ms)
      v yo'q id xato beradi (1ms)
    update()
      v matnni yangilaydi (1ms)
    getCompleted() va getPending()
      v bajarilganlarni qaytaradi (1ms)
    count() va isEmpty()
      v bo'sh listda isEmpty() true (1ms)
      v qo'shilgandan keyin isEmpty() false (1ms)
      v count() to'g'ri hisoblaydi (1ms)
    clear()
      v barcha todo'larni o'chiradi (1ms)

Test Suites: 1 passed
Tests:       14 passed
Time:        0.8s

