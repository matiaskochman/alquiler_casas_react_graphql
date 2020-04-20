#! /bin/bash
yarn build:server
docker build -t matiaskochman/airbnb:latest .
docker push matiaskochman/airbnb:latest
ssh root@64.227.11.166 "docker pull matiaskochman/airbnb:latest && docker tag matiaskochman/airbnb:latest dokku/airbnb:latest && dokku tags:deploy airbnb latest"