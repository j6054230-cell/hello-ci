function add(a, b) {
    return a + b;
}

// Funksiyani eksport qilamiz
module.exports = { add };

// BU QISM MUHIM: Faqat fayl to'g'ridan-to'g'ri yurgizilganda ishlaydi, 
// test vaqtida esa taymer ishga tushmaydi.
if (require.main === module) {
    setInterval(() => {
        console.log("Ishlamoqda... Natija: 2 + 3 = " + add(2, 3));
    }, 10000);
}
