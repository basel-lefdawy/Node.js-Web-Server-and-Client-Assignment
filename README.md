# Node.js-Web-Server-and-Client-Assignment
# Node.js Web Server and Client Assignment

## Overview

This project demonstrates a simple **Node.js web server** with two endpoints and a **client script** that sends a request to the server's JSON API. The server returns either an HTML page or JSON data depending on the requested endpoint.

The assignment illustrates basic concepts of:

* Creating a Node.js web server
* Handling HTTP requests and responses
* Serving HTML files
* Creating a simple JSON API
* Sending HTTP requests from a client script

---

## Project Structure

```
project-folder/
│
├── server.js      # Node.js web server
├── requestSender.js      # Script that sends a request to the JSON API
├── index.html     # HTML page containing name and student ID
└── README.md
```

---

## Features

### 1. Homepage Endpoint (`/`)

When a **GET request** is sent to the root URL:

```
http://localhost:3000/
```

The server returns the contents of `index.html`, which displays:

* **Name:** Basel Lefdawy
* **Student ID:** 12400330

---

### 2. JSON API Endpoint (`/json`)

When a **GET request** is sent to:

```
http://localhost:3000/json
```

The server responds with JSON data:

```json
{
  "name": "Basel Lefdawy",
  "studentID": "12400330"
}
```

---

### 3. Client Script

The `client.js` script sends a request to the JSON API endpoint and prints the response in the terminal.

Example output:

```
Received JSON response:
{ name: 'Basel Lefdawy', studentID: '12400330' }
```

---

## Requirements

* Node.js installed on your system

You can download Node.js from:
https://nodejs.org/

---

## How to Run the Project

### 1. Start the Web Server

Run the following command:

```
node server.js
```

You should see:

```
Server is running on port 3000
```

---

### 2. Test the Homepage

Open a browser and navigate to:

```
http://localhost:3000/
```

The HTML page displaying the name and student ID should appear.

---

### 3. Test the JSON API

Visit:

```
http://localhost:3000/json
```

You should see the JSON response.

---

### 4. Run the Client Script

In another terminal window run:

```
node client.js
```

The terminal will display the JSON data received from the server.

---

## Error Handling

The project includes basic error handling:

* Returns **500 Internal Server Error** if the HTML file cannot be read.
* Returns **404 Not Found** for unknown routes.
* Handles request errors in the client script.

---

## Technologies Used

* **Node.js**
* **HTTP module**
* **File System (fs) module**

---

## Author

**Basel Lefdawy**
Student ID: 12400330
