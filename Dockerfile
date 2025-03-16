FROM node:22.10.0-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:22.10.0-alpine

WORKDIR /app

RUN addgroup -g 1001 nodejs
RUN adduser -D -u 1001 -G nodejs nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV NODE_ENV production

ENV PORT 3000 

ENV HOSTNAME "0.0.0.0"

EXPOSE 3000

CMD ["node", "server.js"]