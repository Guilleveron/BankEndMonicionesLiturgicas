FROM node:18

RUN mkdir -p /usr/src/app

# set working directory 
WORKDIR /usr/src/app

COPY /package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]

