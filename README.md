# 📢 Group Chat Application

A real-time group chat application built using **React + Vite** for the frontend and **Spring Boot + WebSocket + MongoDB** for the backend. The app provides seamless, instant messaging with a modern UI and robust backend infrastructure.

---

## 🚀 Features

✅ **Real-time Messaging** - Instant message delivery via WebSockets  
✅ **User Authentication** - Secure login and signup with JWT  
✅ **Group Chat Support** - Users can create and join multiple chat rooms  
✅ **MongoDB Integration** - Persistent chat storage  
✅ **Modern UI** - Built with React and Vite for a smooth user experience  
✅ **Spring Boot WebSocket** - Ensures efficient real-time communication  

---

## 🛠️ Tech Stack

### **Frontend:**
- React + Vite
- Tailwind CSS (or any other styling library you used)
- WebSockets (for real-time communication)

### **Backend:**
- Spring Boot
- WebSocket
- MongoDB (as the database)
- Spring Security + JWT (for authentication)
- Postman

---

## 📂 Project Structure

```
📦 GroupChatApp
 ┣ 📂 frontend  # React + Vite frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 services
 ┃ ┣ 📄 package.json
 ┃ ┣ 📄 vite.config.js
 ┣ 📂 backend  # Spring Boot backend
 ┃ ┣ 📂 src/main/java/com/groupchat
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 services
 ┃ ┣ 📂 models
 ┃ ┣ 📄 application.properties
 ┣ 📄 README.md
```

---

## 🔧 Setup and Installation

### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/your-username/group-chat-app.git
 cd group-chat-app
```

### **2️⃣ Backend Setup**
```sh
 cd backend
 mvn clean install
 mvn spring-boot:run
```
Ensure MongoDB is running on your system.

### **3️⃣ Frontend Setup**
```sh
 cd frontend
 npm install
 npm run dev
```

---

## 🎯 Future Enhancements
- ✅ Direct messaging support
- ✅ Message reactions and emoji support
- ✅ User typing indicators
- ✅ Push notifications

---

## 🏆 Contributors
- **Vikas Kumar Gupta** - [GitHub Profile](https://github.com/Vikas9kumargupta)

Feel free to contribute! 😊

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

