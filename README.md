# React Job Board - Educational CRUD Application

A simple CRUD job board application built with 3 different frontend stacks for educational purposes. 

## Features

- **Home Page**: Landing page with job board overview
- **Job Listings**: Browse all available job postings
- **Job Details**: View individual job information
- **Add Jobs**: Create new job postings
- **Edit Jobs**: Modify existing job listings

## Preview

![Home Page](demo/Screenshot%201.png)
![Job Listings](demo/Screenshot%202.png)
![Job Management](demo/Screenshot%203.png)

## Project Structure

### 1. Vanilla HTML + Tailwind CSS
**Location**: `html-tailwind/`  
**Description**: Static implementation using plain HTML, CSS, and JavaScript with Tailwind CSS for styling.

**To run**:
```bash
cd html-tailwind
# Open index.html in your browser
```

### 2. React 19 + React Router + Tailwind CSS
**Location**: `react19-tailwind/`  
**Description**: Modern React application using React 19, TypeScript, React Router for navigation, and Tailwind CSS for styling.

**To run**:
```bash
cd react19-tailwind
npm install
npm run dev
npm run server
```

**Backend**: Uses a simple JSON Server for the API ([json-server](https://github.com/typicode/json-server))

### 3. React 19 + Kea + Tailwind CSS
**Location**: `react19-kea-tailwind/`  
**Description**: Advanced React implementation featuring Kea state management, TypeScript, and Tailwind CSS with a two-layer architecture separating data logic from view components.

**To run**:
```bash
cd react19-kea-tailwind
npm install
npm run dev
npm run server
```