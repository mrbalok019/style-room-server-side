#Style Room

## server side code 

This is the backend for a product filtering, sorting, and pagination web application built using the MERN stack.

Features
Product Management: CRUD operations for products.
Filtering & Sorting: Search, categorize, and sort products.
Pagination: Efficient loading with pagination.
Authentication: Google and Email/Password authentication via Firebase.
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Firebase Authentication
JWT
Setup
Prerequisites
Node.js
MongoDB
Firebase Project
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/product-filtering-api.git
cd product-filtering-api
Install dependencies:

bash
Copy code
npm install
Environment Variables: Create a .env file in the root with:

env
Copy code
PORT=5000
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
Run the server:

bash
Copy code
npm start