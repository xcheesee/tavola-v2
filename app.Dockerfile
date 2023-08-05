FROM node:20.5.0-alpine3.18

WORKDIR /usr/src/app

ENTRYPOINT [ "tail", "-f", "/dev/null" ]