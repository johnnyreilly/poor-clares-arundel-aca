FROM node:16 AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:16 AS runtime
WORKDIR /app
COPY --from=build /app/dist /app
COPY --from=build /app/package.json /app
COPY --from=build /app/package-lock.json /app
RUN npm install

ENV NODE_ENV production
EXPOSE 3000
ENTRYPOINT [ "node", "/app/index.js" ]
