FROM node:erbium

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE 1234

CMD npm start