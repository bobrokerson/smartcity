# Use lightweight Nginx image based on Alpine Linux as the base image
FROM nginx:alpine
# Copy the frontend directory contents to the Nginx HTML directory
COPY frontend/ /usr/share/nginx/html/
# Expose port 80 for HTTP access
EXPOSE 80
# Run Nginx in foreground mode to keep the container running
CMD ["nginx", "-g", "daemon off;"]
