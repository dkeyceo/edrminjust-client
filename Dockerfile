FROM node:16.14.0-alpine AS builder

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@14.0.0

COPY ./ ./

RUN npm install

RUN ng build

FROM nginx:stable-alpine
LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/edrminjust-client/ .

