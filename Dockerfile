# Use the official Node.js image as a base image
FROM node:19-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use the official Nginx image to serve the React app
FROM nginx:alpine

# Copy the built React app from the previous stage to Nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000 for the Nginx server
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
