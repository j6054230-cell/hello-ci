# ─── STAGE 1: Builder (Qurilish) ──────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Faqat dependency fayllarini nusxalaymiz
COPY package*.json ./

# Toza o'rnatish (npm install dan ko'ra yaxshiroq)
RUN npm ci --only=production

# Kodni nusxalash
COPY . .

# ─── STAGE 2: Production (Ishchi) ───────────────────────
FROM node:20-alpine AS production

# Xavfsizlik: Root bo'lmagan foydalanuvchi
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Builder bosqichidan faqat kerakli fayllarni ko'chirib olamiz
# Shu joyda barcha "iflos" idishlar (testlar, keraksiz keshlar) Builder'da qolib ketadi
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./

# Foydalanuvchini o'zgartirish
USER appuser

EXPOSE 3000

# Konteyner sog'ligini tekshirish (Healthcheck)
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD node -e "process.exit(0)" || exit 1

CMD ["node", "src/calculator.js"]
