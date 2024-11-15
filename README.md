
# Food Delivery MERN Website 🍔🍕  

Welcome to the Food Delivery MERN Website repository! This project is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to browse food items, place orders, and handle payments seamlessly.  

## 🚀 Live Demo  
Check out the live deployed project:  
[Food Delivery Frontend](https://food-delivery-frontend-ijc8.onrender.com/)

---

## 🛠️ Features  
- **Frontend**: Interactive user interface built with React.js.  
- **Backend**: Robust API powered by Node.js and Express.js.  
- **Database**: MongoDB for efficient data storage and retrieval.  
- **Payment Integration**: Integrated with Stripe for secure transactions.  
- **User Authentication**: JWT-based authentication for login and signup.  

---

## 🖥️ Installation Guide  

Follow these steps to get the project running locally on your system:  

### Prerequisites  
- **Node.js**: Make sure Node.js is installed on your system. [Download Node.js](https://nodejs.org/)  
- **MongoDB**: Ensure you have MongoDB installed or use a cloud database (e.g., MongoDB Atlas).  

### 1️⃣ Clone the Repository  
```bash  
git clone https://github.com/Mohak-Singhal/Food-Delivery-platform.git 
cd Food-Delivery-platform
```  

### 2️⃣ Install Dependencies  
#### For the Backend  
```bash  
cd backend  
npm install  
```  

#### For the Frontend  
```bash  
cd frontend  
npm install  
```  

### 3️⃣ Environment Variables  
Create `.env` files in both the `frontend` and `backend` directories and configure them as follows:  

#### Backend (`backend/.env`)  
```env  
PORT=5000  
MONGO_URI=mongodb_connection_string  
JWT_SECRET=jwt_secret  
STRIPE_SECRET_KEY=stripe_secret_key  
```  

#### Frontend (`frontend/.env`)  
```env  
REACT_APP_API_URL=http://localhost:3000/api  
```  

### 4️⃣ Run the Project Locally  
#### Backend  
```bash  
cd backend  
npm run dev  
```  

#### Frontend  
```bash  
cd frontend  
npm start  
```  

### 5️⃣ Access the Application  
Visit the application in your browser:  
```  
http://localhost:3000  
```  

---

## 📂 Project Structure  

```  
food-delivery-mern/  
│  
├── backend/             # Backend server  
│   ├── models/          # Database models  
│   ├── routes/          # API routes  
│   ├── controllers/     # Business logic  
│   └── server.js        # Entry point  
│  
├── frontend/            # React application  
│   ├── src/             # Source code  
│   ├── public/          # Public assets  
│   └── package.json     # Frontend dependencies  
│  
└── README.md            # Project documentation  
```  

---

## 📜 Scripts  

### Backend  
- `npm run dev`: Starts the server in development mode.  

### Frontend  
- `npm start`: Starts the React development server.  

---

## 🌟 Contributing  

Contributions are welcome! Feel free to fork this repository and submit pull requests.  

---

## 📧 Contact  

For any questions or feedback, please reach out to:  
**Mohak Singhal**: [mohaksinghal516@gmail.com](mailto:mohaksinghal516@gmail.com)  

---  

