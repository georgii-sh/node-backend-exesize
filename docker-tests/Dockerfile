FROM node:erbium as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i

COPY . .

COPY docker-tests/wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

CMD ./wait-for-it.sh mysql_db:3306 --strict --timeout=60 -- npm run coverage