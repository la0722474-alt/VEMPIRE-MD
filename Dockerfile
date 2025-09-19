FROM node:lts-buster

# Clone bot from GitHub
RUN git clone https://github.com/divil-123/VEMPIRE-MD.git /root/vempire-bot

# Set working directory
WORKDIR /root/vempire-bot

# Install dependencies
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1

# Expose port
EXPOSE 9090

# Start the bot
CMD ["npm", "start"]
