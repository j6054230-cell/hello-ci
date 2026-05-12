function add(a, b) { return a + b; }

// Har 10 soniyada natijani chiqarib turadi, shunda konteyner o'chmaydi
setInterval(() => {
  console.log("Ishlamoqda... Natija: 2 + 3 = " + add(2, 3));
}, 10000);

module.exports = { add };
