# Use an official Node runtime as a parent image
FROM node:16.3.0-alpine3.13 as build-stage

# Add the frontend directory to make absolute filepaths consistent across services
WORKDIR /app/frontend
EXPOSE 80

# Install Node dependencies
COPY package.json /app/frontend
RUN npm install --legacy-peer-deps

# Add the rest of the code, noting that node_modules is excluded by .dockerignore
COPY . /app/frontend

RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /app/frontend/build/ /usr/share/nginx/html
COPY --from=build-stage /app/frontend/nginx/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]