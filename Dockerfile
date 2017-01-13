FROM node:4.7.0-wheezy

# Install debug tools
RUN apt-get update
RUN apt-get install -y vim curl

RUN npm install -g pushstate-server
COPY ./build /demo

CMD ["pushstate-server", "/demo", "80"]
