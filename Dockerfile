FROM node:14

# this is a folder inside the docker container
WORKDIR /app

# copy the files from the current directory to the working directory
COPY package.json .
COPY server.js .
COPY index.html .
COPY package.json .

# install the dependencies
RUN npm install

# expose the port
EXPOSE 3000

# run the server
CMD ["node", "server.js"]

# build the image based on the Dockerfile
# docker build -t task-manager:1.0 .

# run the container
# docker run -p 3000:3000 task-manager:1.0


