# Node.js CI/CD with GitHub Actions and AWS

## 🚀 Project Overview
This project demonstrates a Continuous Integration (CI) and Continuous Deployment (CD) pipeline for a Node.js application using GitHub Actions and AWS EC2. The goal is to automate the testing, building, and deployment process to ensure reliable and efficient software delivery.

## ✨ Key Features:
* CI with GitHub Actions: Automates testing and building on every commit and pull request.
* CD to AWS EC2: Deploys the Node.js application to an EC2 instance automatically.
* Version Control with GitHub: Ensures collaboration and code management.
* Process Management with PM2: Keeps the application running after deployment.

## 📂 Project Setup

## 1️⃣ Setting Up the Repository

+ Create a new repository on GitHub and clone it:
```
git clone git clone https://github.com/Joy-it-code/node-ci-cd.git
cd node-ci-cd
```

![](./img/1a.repo.png)
![](./img/2a.cloning.png)

+ Initialize a Node.js project:
```
npm init -y
```

## 2️⃣ Install Dependencies
```
npm install express pm2
```

3️⃣ Create index.js

Inside your project directory, create a file named index.js and add the following code:
```
nano index.js
```
```
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
```

+ Test Locally:

Start your server by running:
```
node index.js
```
+ Navigate to http://localhost:3000 in your browser to ensure it says "Hello World!".
![](./img/2d.node.index.png)
![](./img/2e.local.3000.png)

### Commit and Push:
Add your changes to Git and push them to the GitHub repository:
```
git add .
git commit -m "Initial commit"
git push origin main
```