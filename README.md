# XML Data Upload & Extraction Platform

A full-stack application for uploading XML files, extracting structured data, and managing it through a clean, intuitive interface. Built with Node.js, Express, React, and MongoDB.


**[Live Demo](https://sde-intern-assignment-credit-sea.vercel.app/)** | **[Demo Video](https://drive.google.com/file/d/1gbWIP7MHdbcJ5y9Cy9AojxKPZ5EDtler/view?usp=sharing)**

## 📋 Features

- **XML File Upload**: Seamlessly upload and parse XML files
- **Data Extraction**: Automatically extract and structure data from XML
- **Data Persistence**: Store extracted data in MongoDB
- **Data Retrieval**: Query and retrieve stored data through REST APIs
- **Responsive UI**: Modern, user-friendly React interface
- **Error Handling**: Comprehensive error handling and logging
- **RESTful APIs**: Well-documented API endpoints

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **Tailwind CSS** / **CSS** - Styling
- **React Router** - Navigation (if applicable)

## 📦 Project Structure

```
SDE-Intern-Assignment-CreditSea/
├── backend/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

### Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/dmelloaries/SDE-Intern-Assignment-CreditSea.git
cd SDE-Intern-Assignment-CreditSea
```

#### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Configure environment variables:

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
# Required variables:
# - MONGODB_URI: Your MongoDB connection string
# - PORT: Server port (default: 5000)
# - NODE_ENV: Environment (development/production)
```

Start the development server:

```bash
npm run dev
```

The backend will be running at `http://localhost:5000` (or your configured port)

#### 3. Frontend Setup

In a new terminal, navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Configure environment variables:

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
# Required variables:
# - REACT_APP_API_URL: Backend API base URL (e.g., http://localhost:5000)
```

Start the development server:

```bash
npm run dev
```


### Schema Design Decisions

- **NoSQL Approach**: MongoDB was chosen for its flexibility in handling variable XML structures
- **Flexible Document**: The `extractedData` field stores the entire parsed XML structure as a JSON object
- **Metadata**: Stores file statistics for reference and validation

## 🎯 Usage Guide

1. **Upload XML File**: Click the upload button and select an XML file from your system
2. **View Extracted Data**: The extracted data will be displayed in a structured format

## 🌐 Deployment

**Live Application**: [https://sde-intern-assignment-credit-sea.vercel.app/](https://sde-intern-assignment-credit-sea.vercel.app/)

The application is deployed and ready to use. For detailed demo and walkthrough, check the [demo video](https://drive.google.com/file/d/1gbWIP7MHdbcJ5y9Cy9AojxKPZ5EDtler/view?usp=sharing).

## 📹 Demo Video

Watch a complete walkthrough of the application: [Demo Video Link](https://drive.google.com/file/d/1gbWIP7MHdbcJ5y9Cy9AojxKPZ5EDtler/view?usp=sharing)




---

