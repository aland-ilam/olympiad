# Use the official Node.js image for building the application
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies, including legacy peer dependencies
RUN npm install --legacy-peer-deps

RUN npm install web-vitals

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use Nginx for serving the built application
FROM nginx:alpine

# Copy the built files from the previous stage to Nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 3000 for the application
EXPOSE 3000

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
