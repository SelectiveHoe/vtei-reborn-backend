# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies with specific npm options to avoid hanging
RUN npm install --no-optional --no-fund --no-audit --prefer-offline

# Copy the rest of the application files (this will be overridden by volume in development)
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application in development mode with hot reload
CMD ["npm", "run", "start:dev"]