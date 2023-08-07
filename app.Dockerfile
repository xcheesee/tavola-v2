FROM node:20.5.0-alpine3.18

WORKDIR /usr/src/app

COPY . .

CMD npm install && npm run dev