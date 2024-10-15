# Marvel Heroes CRUD Application

This project is a full-stack CRUD application to manage Marvel heroes. It includes a frontend built with React and TypeScript, and a backend built with NestJS, both deployed online.

## Table of Contents

- [Marvel Heroes CRUD Application](#marvel-heroes-crud-application)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Frontend](#frontend)
    - [Features](#features)
    - [Components](#components)
    - [Technologies](#technologies)
  - [Backend](#backend)
    - [Routes](#routes)
    - [Backend Technologies](#backend-technologies)
  - [Technical Requirements](#technical-requirements)
  - [How to Use](#how-to-use)
  - [Deployment](#deployment)
  - [Running Locally](#running-locally)
  - [Conclusion](#conclusion)

## Overview

The **Marvel Heroes CRUD Application** allows users to manage Marvel heroes through CRUD operations (Create, Read, Update, Delete). The frontend was developed using React and TypeScript, and the backend using NestJS. The app is deployed using Vercel for the frontend and Render for the backend.

## Frontend

### Features

- **List Heroes**: Displays a list of all registered heroes.
- **Add Hero**: Create a new hero by providing details such as name, skills, and origin.
- **Edit Hero**: Update existing hero information.
- **Delete Hero**: Remove a hero from the database.

### Components

1. **HeroList**: Displays all heroes with options to edit or delete.
2. **HeroItem**: Shows details for a single hero, with buttons to edit or delete.
3. **HeroForm**: Used for creating and editing heroes, with fields for name, skills, and origin.

### Technologies

- React with TypeScript for building the user interface.
- Axios for making HTTP requests to the backend API.
- React Context API for state management.
- Deployed on [Vercel](https://crud-herois-da-marvel-fullstack.vercel.app/).

## Backend

### Routes

1. **Create Hero**

   - **Endpoint**: `/heroes`
   - **Method**: `POST`
   - **Description**: Creates a new hero with the provided data (name, skills, origin).
   - **Request Body**:
     ```json
     {
       "name": "Spider-Man",
       "skills": ["Agility", "Spider-Sense"],
       "origin": "New York"
     }
     ```
   - **Response**: Status 201 with the created hero.

2. **List Heroes**

   - **Endpoint**: `/heroes`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all registered heroes.
   - **Response**: Status 200 with a list of heroes.

3. **Update Hero**

   - **Endpoint**: `/heroes/:id`
   - **Method**: `PUT`
   - **Description**: Updates an existing hero’s information using the provided ID.
   - **Request Body**:
     ```json
     {
       "name": "Iron Man",
       "skills": ["Technology", "Genius"],
       "origin": "California"
     }
     ```
   - **Response**: Status 200 with the updated hero.

4. **Delete Hero**
   - **Endpoint**: `/heroes/:id`
   - **Method**: `DELETE`
   - **Description**: Deletes the hero with the given ID.
   - **Response**: Status 204 (No Content).

### Backend Technologies

- NestJS with TypeScript for building the API.
- MongoDB as the database for storing heroes data.
- Deployed on [Render](https://marvel-heroes-api.onrender.com).

## Technical Requirements

**Frontend**:

- React with TypeScript.
- HTTP requests using Axios.
- State management using React Context API or external library (e.g., Redux).
- SWR is a plus for data fetching.

**Backend**:

- NestJS with TypeScript.
- Database connection to mongoDB.
- CRUD operations to manage the heroes.

## How to Use

1. **Access the Frontend**:  
   Go to [Marvel Heroes CRUD Frontend](https://crud-herois-da-marvel-fullstack.vercel.app/) to interact with the heroes management interface.

2. **API Endpoints**:
   - Base URL: [Marvel Heroes API](https://marvel-heroes-api.onrender.com)
   - Use the API routes mentioned above to perform CRUD operations on the heroes.

## Deployment

- **Frontend Deployment**:  
  Access the deployed frontend at [crud-herois-da-marvel-fullstack.vercel.app](https://crud-herois-da-marvel-fullstack.vercel.app/).
- **Backend Deployment**:  
  The backend API is live at [marvel-heroes-api.onrender.com](https://marvel-heroes-api.onrender.com).

## Running Locally

To run the project locally, follow these steps:

1. Clone the repositories for both frontend and backend.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. **Frontend**: Run the React app:
   ```bash
   npm start
   ```
4. **Backend**: Set up the database and environment variables, then start the NestJS app:
   ```bash
   npm start
   ```

## Conclusion

This project demonstrates a fully functional Marvel Heroes CRUD application using modern web technologies such as React, NestJS, and PostgreSQL. The code is well-structured, and the app is deployed for easy access.

---
