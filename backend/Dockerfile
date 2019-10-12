FROM node:10 
WORKDIR /usr/app

COPY ./package.json  /usr/app
COPY ./package-lock.json  /usr/app

RUN npm install

COPY . /usr/app 
