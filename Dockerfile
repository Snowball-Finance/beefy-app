FROM node:12.21.0-alpine3.11 as node

# Create app directory
RUN mkdir -p /snowball-app
WORKDIR /snowball-app

# Install app dependencies
RUN apk update && apk upgrade && apk add git

# Copy dependency definitions
COPY package.json /snowball-app
# Install dependencies using npm
RUN npm install
# Get all the code needed to run the app
COPY . /snowball-app

# Build app
RUN npm run build

#==================== Setting up stage ====================
# Create image based on the official nginx - Alpine image
FROM nginx:1.14.0-alpine
#takes the dist folder from previously named container
COPY --from=node /snowball-app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf