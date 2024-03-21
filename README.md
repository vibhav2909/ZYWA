
Project Name: Zywa - Card Status Checker

Overview:
Zywa is a web application designed to check the status of cards based on either card ID or mobile number input. The application provides users with a simple interface to enter the card ID or mobile number and retrieves the latest status of the corresponding card from the database.

Technology Stack:

Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB
HTTP Requests: Axios
Why React.js for Frontend:
React.js was chosen for the frontend due to its component-based architecture, which allows for better code organization and reusability. Additionally, React's virtual DOM efficiently updates only the components that have changed, leading to improved performance. The use of React also enables easier state management, which is crucial for handling user input and displaying dynamic data.

Why Node.js with Express.js for Backend:
Node.js with Express.js was selected for the backend due to its lightweight and efficient nature, making it ideal for building RESTful APIs. Express.js provides a simple and minimalistic framework for handling HTTP requests, routing, and middleware. Node.js's non-blocking I/O model ensures high scalability and performance, which is essential for handling concurrent requests in a web application.

Why MongoDB for Database:
MongoDB was chosen as the database for its flexibility and scalability. Being a NoSQL database, MongoDB allows for the storage of unstructured data, making it suitable for storing card status information, which may vary in structure. Additionally, MongoDB's scalability enables seamless handling of large volumes of data, ensuring the application can accommodate growth in the number of users and cards.

Firlstly i saved the csv files in my device and from the new.js file after adding the path to each csv i combined them based on their Card_id which will has the data of the particular card id about its pickup, deliver and delivered/returned

Possible Improvements:
Input Validation: Implement input validation on the frontend to ensure that users enter valid card IDs or mobile numbers before submitting the request.
Error Handling: Enhance error handling on both the frontend and backend to provide informative error messages to users in case of failures.
Authentication and Authorization: Implement user authentication and authorization mechanisms to restrict access to sensitive endpoints and data.
UI/UX Enhancements: Improve the user interface and experience by adding animations, feedback messages, and better styling to make the application more visually appealing and intuitive.
Testing: Write unit tests and integration tests for both the frontend and backend to ensure the reliability and stability of the application.
Deployment: Deploy the application to a production environment using platforms like Heroku or AWS for accessibility to users.

Architectural Decisions:

Component-Based Frontend: The frontend is structured using a component-based architecture, with each component responsible for a specific UI element or functionality. This approach allows for better code organization, reusability, and maintenance.
Separation of Concerns: The backend follows the principles of separation of concerns, with distinct modules for routing, controller logic, and database interactions. This modular approach improves code readability, testability, and scalability.
RESTful API Design: The backend exposes RESTful endpoints for handling CRUD operations on card status data. This design ensures that the API is intuitive, stateless, and conforms to industry best practices.
Asynchronous Communication: The frontend communicates asynchronously with the backend using HTTP requests, allowing for non-blocking interactions and improved performance.
State Management: The application's state is managed using React's built-in state management capabilities, allowing for efficient data manipulation and UI updates based on user interactions and API responses.


The data is stored in the mongoDb in the foloowing format
_id
65fb18781f27a3b590fc0ba4

ObjectId
cardID
ZYW7631

String
mobile
545576586

String

statuses
Array (3)

Array

0
Object

Object
status
PICKUP

String
timeStamp
13-11-2023 11:02 AM

String
comment

String
_id
65fb18781f27a3b590fc0ba5

ObjectId

1
Object

Object
status
DELIVERY

String
timeStamp
13-11-2023 16:00

String
comment
User declined to accept package

String
_id
65fb18781f27a3b590fc0ba6

ObjectId

2
Object

Object
status
DELIVERED

String
timeStamp
2023-11-14T12:34:56Z

String
comment
DELIVERED

String
_id
65fb18781f27a3b590fc0ba7

ObjectId

__v
0


