FROM node:alpine
RUN addgroup -g 1001 app && adduser -D -u 1001 -G app app
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
USER app
EXPOSE 3000
CMD ["node", "server.js"]
