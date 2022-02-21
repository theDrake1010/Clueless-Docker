FROM node:14.18.3-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY ./ ./

ENV MONGO_SERVICE_HOST_PORT 27017
ENV DB_NAME mean-docker

EXPOSE 3000

CMD ["npm", "start"]
