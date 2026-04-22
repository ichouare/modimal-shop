# image to print in console "hello capitain"


ARG NODE_VERSION=24.13.0-slim

FROM  node:${NODE_VERSION} AS base


FROM base AS builder


WORKDIR /app

COPY package.json package-lock.json .


ENV NODE_ENV=production


RUN npm ci

COPY . .

RUN npm start build

FROM base as runner

WORKDIR /app




