FROM node:14.18.3-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY ./ ./

ENV MONGO_URL mongodb://172.17.0.2:27017/mean-docker

EXPOSE 3000

CMD ["npm", "start"]
