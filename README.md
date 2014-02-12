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

    heroku git:remote -a tasky-web 
    git push heroku master 

## Testing 

    grunt test:ci
