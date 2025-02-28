Group Chat Application

Overview

This is a real-time group chat application built using Spring Boot, Java, WebSocket, and MongoDB. The application allows users to create or join chat rooms using a unique room ID and exchange messages in real time. All messages are stored in MongoDB for persistence.

Features

Real-time Messaging: Instant updates for all users in the room using WebSocket.

Room Management: Users can create or join chat rooms using a unique room ID.

Persistent Storage: Messages are stored in MongoDB to retain chat history.

User-friendly API: RESTful endpoints to manage rooms and messages.

GitHub Integration: Version control managed through Git and GitHub.

Tech Stack

Backend: Spring Boot, Java

WebSocket: For real-time communication

Database: MongoDB (NoSQL) for storing messages

Version Control: Git & GitHub for collaboration

Installation & Setup

Prerequisites

Ensure you have the following installed:

Java 11+

Maven

MongoDB (running instance)

Git

Steps to Run the Application

Clone the repository:

git clone <repository_url>
cd group-chat-app

Configure MongoDB:

Update application.properties or application.yml with your MongoDB connection details.

Build and Run the Application:

mvn clean install
mvn spring-boot:run

Access the Application:

WebSocket API will be available at: ws://localhost:8080/chat

REST API will be available at: http://localhost:8080

API Endpoints

Method

Endpoint

Description

POST

/rooms

Create a new chat room

GET

/rooms/{roomId}

Join an existing room

POST

/messages

Send a message to a room

GET

/messages/{roomId}

Retrieve messages of a room

WebSocket Implementation

WebSocket connection: ws://localhost:8080/chat/{roomId}

Message format:

{
  "roomId": "12345",
  "username": "JohnDoe",
  "message": "Hello, world!"
}

Contribution

Fork the repository.

Create a new feature branch.

Commit your changes.

Push to your fork and submit a pull request.

License

This project is licensed under the MIT License.

Contact

For any issues or suggestions, feel free to open an issue or reach out to the maintainer.

