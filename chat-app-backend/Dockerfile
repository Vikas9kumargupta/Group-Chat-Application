# Use an official Java runtime as a parent image
FROM openjdk:21-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file into the container
COPY target/chat-app-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that the application will run on
EXPOSE 8080

# Set environment variable for Vercel
ENV PORT=8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]