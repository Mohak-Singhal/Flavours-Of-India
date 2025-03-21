
# Flavours of India   

Experience the best of Indian cuisine with our Food Ordering MERN platform. Browse a diverse selection of dishes, place your order with ease, and enjoy hassle-free payments.

## 🚀 Live Demo  
Check out the live deployed project:  
[Flavours of India](https://flavours-of-india.vercel.app//)

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
#### For the Admin  
```bash  
cd admin  
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
#### Admin (`admin/.env`)  
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
#### Admin  
```bash  
cd admin  
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
Food-Delivery-platform/  
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
├── admin/            # React application  
│   ├── src/             # Source code  
│   ├── public/          # Public assets  
│   └── package.json     # Frontend dependencies  
│  
└── README.md            # Project documentation  
```  

---

