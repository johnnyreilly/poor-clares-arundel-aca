##
## IMAGE: build-client
##
FROM node:18 AS build-client
WORKDIR /client

COPY src/client/package.json src/client/yarn.lock ./
RUN yarn --network-timeout 100000

COPY src/client ./
RUN yarn build

##
## IMAGE: build-server
##
FROM node:18 AS build-server
WORKDIR /server

COPY src/server/package.json src/server/yarn.lock ./
RUN yarn --network-timeout 100000

COPY src/server ./
RUN yarn build

##
## IMAGE: runtime
##
FROM node:18 AS runtime
ENV NODE_ENV production

WORKDIR /app
COPY --from=build-client client/dist ./client/dist
COPY --from=build-server server/dist ./dist
COPY --from=build-server server/package.json server/yarn.lock ./
RUN yarn --network-timeout 100000

EXPOSE 3000
CMD [ "node", "dist/index.js" ]

# then to build
# docker build --tag poorclaresarundel .

# then to run
# docker run -p 3000:3000 poorclaresarundel

# docker stop poorclaresarundel
# docker rm poorclaresarundel

# debug failing build
# docker run -it 5b272099a bash -il

# to run terminal inside container
# docker exec -it 191e bash 