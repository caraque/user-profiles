FROM node:16.14.2-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . ./

CMD ["yarn", "start"]
