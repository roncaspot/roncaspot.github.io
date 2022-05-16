FROM scionproto/docker-caps as caps
FROM node:16 as dev-base
ARG USER_ID=1000
ARG GROUP_ID=1000

ENV DOCKER_CONTAINER=1
ENV TERM ansi

WORKDIR /opt/application/

RUN apt-get update && apt-get install -y \
      bash \
      sudo \
      && rm -rf /var/lib/apt/lists/*

# allow node to bind the 443 port (for dev purpose)
COPY --from=caps /bin/setcap /bin
RUN setcap cap_net_bind_service=+ep /usr/local/bin/node

ENV DOCKER_CONTAINER=1

WORKDIR /usr/src/service

RUN deluser node
RUN addgroup --gid $GROUP_ID node && \
    adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID node && \
    passwd -d node && \
    echo 'node ALL=(ALL:ALL) NOPASSWD: ALL' >> /etc/sudoers

# Correct permissions for non-root operations
RUN chown -R node:node \
    /run \
    /home/node \
    /usr/src/service

USER node

# enable npm completition within the container shell
RUN npm completion >> ~/.bashrc

COPY --chown=node:node package.json /usr/src/service/package.json
COPY --chown=node:node package-lock.json /usr/src/service/package-lock.json

RUN npm install

RUN rm package.json package-lock.json



