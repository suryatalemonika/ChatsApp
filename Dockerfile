# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /home/developers/ChatsApp

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Clear npm cache
RUN npm cache clean --force

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port that the app will run on
EXPOSE 5002

# Define the command to run your application
CMD ["npm", "test"]
