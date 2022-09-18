# Poor Clares Arundel 

[![ci](https://github.com/johnnyreilly/poor-clares-arundel-koa/actions/workflows/deploy.yml/badge.svg)](https://github.com/johnnyreilly/poor-clares-arundel-koa/actions/workflows/deploy.yml)

The Poor Clares of Arundel's website - the source of: https://www.poorclaresarundel.org/

To my knowledge this is the first Convent with Continuous Deployment.

Built with React and Koa.

## Developing

### Docker

To build with docker: `docker build --tag poorclaresarundel .`

To run then `docker-compose up`; remember to update `docker-compose.yml` with variables.

### Locally

You can debug the server in VS Code by hitting F5.

Before you do that remember to build:

```bash
yarn build:client
```

If you want to debug the client then:

```bash
cd src/client
yarn start
```

## Licence

Copyright © 2014- [John Reilly](twitter.com/johnny_reilly). This project is licensed under the [MIT license](http://opensource.org/licenses/mit-license.php).




https://discord.com/channels/706570038668165141/959007392396361768