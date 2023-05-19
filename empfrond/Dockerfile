
FROM node:14.20-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build 
RUN npm prune --production
ENV NODE_ENV production
# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/* /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200