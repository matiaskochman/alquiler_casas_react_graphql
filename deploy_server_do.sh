#! /bin/bash
yarn build:server

# digital ocean dokku (docker)
# docker build -t matiaskochman/airbnb:latest .
# docker push matiaskochman/airbnb:latest
# ssh root@64.227.11.166 "docker pull matiaskochman/airbnb:latest && docker tag matiaskochman/airbnb:latest dokku/airbnb:latest && dokku tags:deploy airbnb latest"

# heroku not working
heroku login # ???
heroku container:login # ???
heroku container:push --app=salty-fortress-39814  web
heroku container:release --app=salty-fortress-39814  web

