#! /bin/bash
yarn build:web

# create airbnb/packages/web/public/_redirects
# add the following to the file to be able to use routing
# /* /index.html 200

netlify deploy --dir=packages/web/build