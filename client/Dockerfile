FROM node:14.18.0 as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.13.12-alpine

COPY --from=base /usr/src/app/dist/client /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf