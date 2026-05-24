# CI/CD Demo Project

This is a simple Node.js application built with Express and tested using Jest. It's designed to be a starting point for building and practicing CI/CD pipelines.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

3. **Run tests:**
   ```bash
   npm test
   ```
   This will execute the Jest test suite to verify the application is working correctly.

## CI/CD Usage

You can use this repository to practice CI/CD with platforms like GitHub Actions, Jenkins, GitLab CI, or CircleCI. 

A typical pipeline for this project might include:
- **Build Phase:** Run `npm install`
- **Test Phase:** Run `npm test`
- **Deploy Phase:** Deploy the application to a cloud provider (e.g., Heroku, AWS, Render) if tests pass.
