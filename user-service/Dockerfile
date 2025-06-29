# 1. Base image
FROM node:18

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy all other code
COPY . .

# 6. Expose the service port (set accordingly per service)
EXPOSE 3001

# 7. Start the service
CMD ["node", "app.js"]
