const sum = require('../../index');

console.log("🚀 Test jarayoni boshlandi...");

const result = sum(2, 3);
const expected = 5;

if (result === expected) {
    console.log("✅ TEST MUVAFFAQIYATLI: 2 + 3 = 5");
    process.exit(0);
} else {
    console.error("❌ TEST XATOSI: Kutilgan natija " + expected + ", lekin olindi " + result);
    process.exit(1);
}
