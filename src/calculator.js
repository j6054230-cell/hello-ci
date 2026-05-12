function add(a, b) {
    return a + b;
}

module.exports = { add };

if (require.main === module) {
    setInterval(() => {
        console.log("Dastur ishlayapti...");
    }, 10000);
}
