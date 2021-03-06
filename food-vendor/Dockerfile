# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12 as builder

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./


# Copy local code to the container image.
COPY . ./

# Install all dependencies (including dev-only TypeScript).
RUN yarn install

# Compile TS
RUN yarn build

# Start building the production image with dev dependencies stripped away
FROM node:12-slim

WORKDIR /usr/src/app
COPY package*.json ./

# Install only prod dependencies
RUN yarn install --prod

# Copy build from previous image
COPY --from=builder /usr/src/app/build ./build

# Run the web service on container startup.
CMD [ "yarn", "start" ]