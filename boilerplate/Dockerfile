FROM node:lts-alpine

ENV NODE_ENV=production

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY app ./app
COPY config ./config
COPY package.json ./package.json
COPY node_modules ./node_modules

EXPOSE 80
CMD npm run start