FROM node:14.17-alpine

WORKDIR /api

COPY package*.json ./

RUN npm install --production

RUN rm -rf node_modules/bcrypt && npm install bcrypt && npm rebuild bcrypt

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]