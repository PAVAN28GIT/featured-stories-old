FROM node:20-alpine

# Create working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Copy the config.env file
COPY config.env ./config.env

# Expose port 8000
EXPOSE 8000

# Run the app
CMD ["npm", "start"]