FROM node:18.18.2-alpine AS base

# 의존성 설치 (700 MB)
FROM base AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app-dependencies
COPY package.json package-lock.json ./
RUN npm ci

# 빌더 (2 GB)
FROM base AS builder
WORKDIR /app-builder
COPY --from=dependencies /app-dependencies/node_modules ./node_modules
COPY . .
RUN npm run build:prod

# 러너 (150 MB)
FROM base AS runner
WORKDIR /app-runner
ENV HOSTNAME "0.0.0.0"
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app-builder/public ./public
COPY --from=builder --chown=nextjs:nodejs /app-builder/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app-builder/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]