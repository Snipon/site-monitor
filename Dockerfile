FROM node:alpine
COPY ./api /app
WORKDIR /app
RUN npm i
CMD node index
EXPOSE 3001
