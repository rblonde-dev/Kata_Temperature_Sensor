# Start with a lightweight base image
FROM alpine:latest
 
# Install SQLite
RUN apk update && apk add sqlite


# Set the default working directory
WORKDIR /db

# Copy initial database into image
COPY ["HeatSensors.db", "HeatSensors.db"]

 
# Set the default command to open SQLite
CMD ["sqlite3"]