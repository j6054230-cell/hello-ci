# 1. Kichik base image (Alpine)
FROM node:20-alpine

# 2. Xavfsizlik: app degan foydalanuvchi yaratamiz (Root'da ishlatmaslik uchun)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# 3. Ish papkasi
WORKDIR /app

# 4. KESH OPTIMIZATSIYASI: Avval faqat package fayllarini nusxalaymiz
# Shunda kod o'zgarsa ham, agar yangi kutubxona qo'shilmasa, 
# 'npm install' bosqichi keshdan olinadi.
COPY package*.json ./

# 5. Bog'liqliklarni o'rnatish
RUN npm install --production

# 6. Kodni eng oxirida nusxalaymiz (Chunki kod har kuni o'zgaradi)
COPY src/ ./src/

# 7. Foydalanuvchini almashtiramiz (Root emas, oddiy user bo'lib ishlaydi)
USER appuser

# 8. Ishga tushirish
CMD ["node", "src/calculator.js"]
