FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY docker_config/nginx.conf /etc/nginx/conf.d/default.conf