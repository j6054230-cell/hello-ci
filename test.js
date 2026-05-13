const sum = require('./index');

const result = sum(2, 3);
const expected = 5;

if (result === expected) {
    console.log("✅ Test muvaffaqiyatli o'tdi: 2 + 3 = 5");
    process.exit(0); // 0 - hammasi yaxshi degani
} else {
    console.error("❌ Test xatosi: Kutilgan natija " + expected + ", lekin olindi " + result);
    process.exit(1); // 1 - xatolik borligini bildiradi
}
