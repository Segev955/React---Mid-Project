# React Mid Project

## 📌 Project Overview  
This React project is a client-side database management application that interacts with server data from the following sources:  

- [Users API](https://jsonplaceholder.typicode.com/users)  
- [Posts API](https://jsonplaceholder.typicode.com/posts)  
- [Todos API](https://jsonplaceholder.typicode.com/todos)  

The application initializes data from these APIs and allows users to **search, update, delete, and manage** users, todos, and posts.

---

## 🔹 Features  

### **1️⃣ Display Users**  
- The UI presents all users sorted by their **ID**.  
- Users with **incomplete todos** are highlighted with a **red border**, while others have a **green border**.  

### **2️⃣ Search Functionality**  
- The search bar filters users by **name** or **email** dynamically.  

### **3️⃣ View Other Data**  
- Hovering over the **"Other Data"** section reveals additional user details.  
- Clicking on the section closes it.  

### **4️⃣ Update & Delete User Data**  
- **Update:** Allows editing user data and saving changes.  
- **Delete:** Completely removes a user and their associated todos and posts.  

### **5️⃣ Selecting a User**  
- Clicking on a user’s **ID** highlights the section in **orange**.  
- The user’s **posts and todos** are displayed.  
- Todos that are incomplete will have a **"Mark Completed"** button.  

### **6️⃣ Add New Todo**  
- Clicking **"Add"** above the **todo list** opens a form to add a new todo.  
- Clicking **"Cancel"** restores the todo list.  

### **7️⃣ Add New Post**  
- Clicking **"Add"** above the **posts list** opens a form to add a new post.  
- Clicking **"Cancel"** restores the post list.  

### **8️⃣ Add New User**  
- Clicking **"Add"** above the **users list** opens a form on the right to create a new user.  
- Additional data can only be updated after user creation.  

---

## 🏗️ Setup & Installation  

1. Clone the repository:  
   ```sh
   git clone https://github.com/Segev955/React---Mid-Project.git
   cd react-mid-project
