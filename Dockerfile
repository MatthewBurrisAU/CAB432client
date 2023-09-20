# build stage
FROM node:16-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# production stage
#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 3000
#CMD ["nginx", "-g", "daemon off;"]

#DONE