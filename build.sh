#!/bin/bash

docker build -f Dockerfile -t dcent ..
docker create -it --name dcent dcent bash
docker cp dcent:/app/dcent/dist/dcent-v1.0.0/dcent-v1.0.0-linux-x64.tar.gz .
docker rm -f dcent