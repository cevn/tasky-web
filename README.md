# Tasky 

Webapp for cs435. 


## Prerequesites

You need to have node.js as well as npm to be on your system. 

## Install

    git clone git@github.com:cevn/tasky-web.git 
    npm install
    bower install

## Running

    grunt server

## Deploying 

Deployment is done on-the-fly by [Travis-CI](https://travis-ci.org). After
a push to master, travis-ci will automagically run the test suite. If
the tests are all successful, it uses my heroku details to push to the webapp. 

## Testing 

    grunt test:ci
