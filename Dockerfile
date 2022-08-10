FROM node:14.18.1

WORKDIR app/

RUN apt-get update && apt-get install -y \
  libusb-1.0-0-dev \
  libudev-dev

COPY dcent/package.json dcent/
RUN cd dcent && npm install

COPY . .
RUN cd dcent && npx oclif-dev pack -t linux-x64