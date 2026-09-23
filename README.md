# 🛍️ Product Management Dashboard

A modern and responsive **Product Management Dashboard** built with React for a small online store. The application demonstrates fundamental React concepts including reusable components, props, state management, event handling, conditional rendering, API integration, React Router, and responsive UI design with Tailwind CSS.

Product information is dynamically retrieved from the **Fake Store API** rather than using a locally hard-coded product dataset.

---

## 📌 Project Overview

This project was developed as a **Nexus Academy React Group Assignment**.

The goal is to build a professional product management interface while practicing both React development and real-world Git/GitHub collaboration.

The application allows users to:

* Browse products
* Search products by name
* Filter products by category
* View product information
* Navigate between different pages
* Submit contact information
* Use a simple login interface
* Experience responsive layouts across different screen sizes

---

## ✨ Features

### 🏠 Home Page

* Store name/logo
* Responsive navigation bar
* Hero section
* Store introduction
* Call-to-action button
* Featured products from the Fake Store API
* Footer

### 🛒 Products Page

* Fetches products from the Fake Store API
* Displays reusable product cards
* Product image
* Product title
* Category
* Price
* Description
* View Details button
* Search functionality
* Category filtering
* Combined search and category filtering

### 🔎 Product Search

Users can search products by their title/name.

If no product matches the search:

> No products found.

### 🏷️ Category Filter

Users can filter products according to categories provided directly by the API.

Available filtering includes:

* All
* API-provided categories

### 📖 About Page

Contains:

* Store introduction
* Mission
* Vision
* Company/team information

### 📩 Contact Page

Includes a contact form with:

* Full Name
* Email
* Subject
* Message
* Submit button

The form uses React state and displays a success message after submission.

### 🔐 Login Page

Simple login interface containing:

* Email
* Password
* Login button

> **Note:** Real authentication is not implemented because it is not required for the current assignment.

### 🧭 Navigation

React Router is used for navigation between:

| Page     | Route       |
| -------- | ----------- |
| Home     | `/`         |
| Products | `/products` |
| About    | `/about`    |
| Contact  | `/contact`  |
| Login    | `/login`    |

The navigation uses `Link` and `NavLink`, with the active page receiving a different visual style.

### 📱 Responsive Design

The application is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Tailwind CSS is used for responsive layouts, spacing, typography, buttons, forms, product grids, and UI states.

---

## 🛠️ Technologies Used

| Technology     | Purpose                                 |
| -------------- | --------------------------------------- |
| React          | Frontend application                    |
| JavaScript     | Application logic                       |
| React Router   | Page navigation                         |
| Tailwind CSS   | Styling and responsive design           |
| Fetch API      | Retrieving product data                 |
| Fake Store API | Product data source                     |
| Git            | Version control                         |
| GitHub         | Collaboration and repository management |
| Vite           | Development/build tooling               |

---

## 🌐 API

This project uses the **Fake Store API** as the primary source of product data.

### Products Endpoint

```text
https://fakestoreapi.com/products
```

Products are fetched when the Products page loads and stored in React state before being rendered.

The project does **not** use a local `products.js` mock dataset.

---

## 🔄 API States

Because the application depends on an external API, the Products page handles three request states.

### Loading

```text
Loading...
```

Displayed while the API request is being processed.

### Success

Products returned from the API are displayed using reusable product cards.

### Error

```text
Something went wrong. Please try again.
```

Displayed if the API request fails.

---

## 📂 Project Structure

```text
project-name/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── CategoryFilter.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Login.jsx
│   │
│   ├── services/
│   │   └── productService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

The project separates reusable components, pages, and API/service logic to keep the application clean and maintainable.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <https://github.com/BemnetMandefro/React-Group.git>
```

### 2. Navigate to the Project

```bash
cd <React-Group>
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Open the local URL displayed by Vite in your browser.

Example:

```text
http://localhost:5173
```

---

## 📦 Installation Requirements

Before running the project, make sure you have installed:

* Node.js
* npm
* Git
* A modern web browser

You can verify your installations with:

```bash
node --version
npm --version
git --version
```

---

## 🔀 Git & GitHub Collaboration

This project follows a professional Git/GitHub workflow.

Team members should **not develop directly on the `main` branch**.

### Development Workflow

```text
GitHub Issue
     ↓
Feature Branch
     ↓
Development
     ↓
Commit
     ↓
Push
     ↓
Pull Request
     ↓
Code Review
     ↓
Merge
     ↓
Delete Branch
```

### Example Feature Branches

```bash
feature/navbar
feature/home-page
feature/api-integration
feature/product-card
feature/product-search
feature/category-filter
feature/about-page
feature/contact-page
feature/login-page
feature/routing
```

---

## 📝 Commit Convention

Commits should be small, meaningful, and descriptive.

Examples:

```bash
git commit -m "feat: integrate fake store api"
```

```bash
git commit -m "feat: add product card component"
```

```bash
git commit -m "feat: implement product search"
```

```bash
git commit -m "feat: add category filter"
```

```bash
git commit -m "feat: add loading and error states"
```

```bash
git commit -m "style: improve product grid"
```

---

## 🔃 Pull Request Workflow

For each completed feature:

1. Push the feature branch.
2. Create a Pull Request.
3. Give the Pull Request a clear title.
4. Explain what was implemented.
5. Request another team member to review the code.
6. Address review comments when necessary.
7. Merge the Pull Request.
8. Delete the feature branch after merging.

---

## 👥 Team Collaboration

This is a group project, therefore every member is expected to contribute.

Team members should participate in:

* GitHub Issues
* Feature development
* Feature branches
* Meaningful commits
* Pull Requests
* Code reviews
* Testing
* Merge conflict resolution

The GitHub repository history may be used to verify individual contributions.

### Team Members

| No. | Name              | Role / Contribution |
| --: | ----------------- | ------------------- |
|   1 | **[Member Name]** | [Contribution]      |
|   2 | **[Member Name]** | [Contribution]      |
|   3 | **[Member Name]** | [Contribution]      |
|   4 | **[Member Name]** | [Contribution]      |
|   5 | **[Member Name]** | [Contribution]      |

### Group Leader

**Name:** [Group Leader Name]

The group leader coordinates the repository, Issues, assignments, Pull Requests, reviews, and final submission.

---

## 🧩 GitHub Issues

The project can be divided into the following development tasks:

* #1 — Project setup
* #2 — Navbar
* #3 — Home page
* #4 — Fake Store API integration
* #5 — Product Card
* #6 — Products page
* #7 — Loading and error states
* #8 — Product search
* #9 — Category filter
* #10 — About page
* #11 — Contact page
* #12 — Login page
* #13 — React Router
* #14 — Responsive design
* #15 — Final testing

---

## ⚔️ Merge Conflict Resolution

The team practices resolving at least one Git merge conflict.

When a conflict occurs:

1. Understand the conflicting changes.
2. Decide which code should remain.
3. Remove Git conflict markers.
4. Test the application.
5. Stage the resolved files.
6. Commit the resolution.
7. Complete the merge/rebase process.

Example conflict markers:

```text
<<<<<<< HEAD
your code
=======
other branch's code
>>>>>>> branch-name
```

---

## 🧪 Testing Checklist

Before submission, the team should verify:

* [ ] Home page works
* [ ] Products page works
* [ ] About page works
* [ ] Contact page works
* [ ] Login page works
* [ ] Products are fetched from the Fake Store API
* [ ] No local `products.js` mock dataset is used
* [ ] Loading state works
* [ ] API error state works
* [ ] Product information displays correctly
* [ ] Product search works
* [ ] Category filtering works
* [ ] Search and category filtering work together
* [ ] Empty search results are handled
* [ ] `ProductCard` is reusable
* [ ] Props and `useState` are used appropriately
* [ ] React Router is implemented
* [ ] `Link` and `NavLink` are used
* [ ] Tailwind CSS is used
* [ ] Application is responsive
* [ ] No console errors
* [ ] GitHub Issues were used
* [ ] Feature branches were used
* [ ] Meaningful commits were made
* [ ] Pull Requests were created
* [ ] Code reviews were performed
* [ ] At least one merge conflict was resolved
* [ ] README is complete
* [ ] Every team member contributed

---

## 📸 Screenshots

Add screenshots of the completed application here.

### Home Page

```text
[Add screenshot here]
```

### Products Page

```text
[Add screenshot here]
```

### Product Search & Filter

```text
[Add screenshot here]
```

### Contact Page

```text
[Add screenshot here]
```

### Login Page

```text
[Add screenshot here]
```

---

## 🔮 Future Improvements

The current assignment focuses on basic routing and API integration. Future versions may introduce:

```text
Current Project
      ↓
Basic Routing + API
      ↓
Dynamic Routing
      ↓
Product Details
      ↓
Global State
      ↓
Favorites / Cart
      ↓
Authentication
      ↓
Protected Routes
      ↓
More API Features
```

The current codebase is structured to make these future features easier to implement.

---

## 🎓 Learning Outcomes

Through this project, the team practices:

* React components
* Props
* `useState`
* Events
* Forms
* Conditional rendering
* `map()`
* API requests
* Loading and error handling
* Search functionality
* Filtering
* React Router
* Tailwind CSS
* Responsive UI development
* Git branching
* GitHub Issues
* Pull Requests
* Code reviews
* Merge conflict resolution
* Team-based software development

---

## 📚 Assignment

**Nexus Academy — React Group Assignment**

**Project:** Product Management Dashboard

**Project Type:** Group Project

**Technology:** React + React Router + Tailwind CSS

**Product Data:** Fake Store API

---

## 👨‍💻 Team

Developed collaboratively by the **Nexus Academy React Group**.

> **Build it as a team. Learn from each other. Keep your Git history clean.**

---

## 📄 License

This project was created for educational purposes as part of the Nexus Academy React Group Assignment.
