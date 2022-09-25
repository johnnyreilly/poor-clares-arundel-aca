# Poor Clares Arundel

[![Build and Deploy](https://github.com/johnnyreilly/poor-clares-arundel-aca/actions/workflows/build-and-deploy.yaml/badge.svg)](https://github.com/johnnyreilly/poor-clares-arundel-aca/actions/workflows/build-and-deploy.yaml)

Built with Azure Container Apps and deployed here: https://main-web.yellowcliff-09c0e434.northeurope.azurecontainerapps.io/

Test locally with:

```shell
docker-compose up
```

## Custom domain

To use custom domains with Azure Container Apps you need to create a certificate:

https://learn.microsoft.com/en-gb/azure/container-apps/custom-domains-certificates

Certificate created with:

```shell
sudo openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
  -keyout poorclaresarundel.org.key -out poorclaresarundel.org.crt -subj "/CN=poorclaresarundel.org" \
  -addext "subjectAltName=DNS:poorclaresarundel.org,DNS:www.poorclaresarundel.org,IP:20.31.220.24"
sudo chmod +r poorclaresarundel.org.key
cat poorclaresarundel.org.crt poorclaresarundel.org.key > poorclaresarundel.org.pem
```

