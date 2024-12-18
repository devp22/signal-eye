# Step 1: Use the official Node.js image as the base image to build the React app
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for npm install
COPY package.json package-lock.json ./

# Step 4: Install the project dependencies
RUN npm install

# Step 5: Copy the rest of the application source code into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use an NGINX image to serve the built React app
FROM nginx:alpine

# Step 8: Copy the build folder from the previous image to NGINX's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to the outside world
EXPOSE 80

# Step 10: Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
