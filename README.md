
## Candidate Search Application

# Description

The Candidate Search Application is a web-based tool that allows employers to browse potential candidates using data retrieved from the GitHub API. Users can review candidate profiles, save promising candidates, and maintain a list of potential hires. The application is built using TypeScript and stores saved candidates in local storage for persistence.

# Table of Contents

Installation

Usage

Features

Technologies Used

Deployment

Screenshots

License

Contributors

# Installation

To run the application locally, follow these steps:

Clone the repository:

git clone https://github.com/cdgrosso/mod-13-challenge.git

Install dependencies:

npm install

Create a .env file in the environment folder and add your GitHub API token:

VITE_GITHUB_TOKEN=your_personal_access_token

Start the application:

npm start

# Usage

Searching for Candidates

Upon loading, the application displays a candidate's name, username, location, avatar, email, profile link, and company.

# Features

- Fetches candidate data from the GitHub API.
- Uses TypeScript for type safety.
-  Implements local storage to save candidates.
- Displays candidate details.
- Allows users to accept or reject candidates.

# Technologies Used

TypeScript

React

GitHub API

Local Storage

CSS for styling

#Screenshot

![Screenshot 2025-03-27 161320](https://github.com/user-attachments/assets/8d6f03d1-6ac5-4ed7-87d0-90b856efd2f7)

# License

This project is licensed under the MIT License.

# Contributors

https://github.com/cdgrosso
