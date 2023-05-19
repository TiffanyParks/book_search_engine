
## How to Use
1. A user can type a search term (in this case, "star wars") in a search box and their results will appear.
2. The user can save books by clicking "Save This Book!" under each search result.
3. A user can view their saved books on a separate page.


## User Story:

AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase


## Acceptance Criteria:

GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## Client Dependencies:
* apollo/client: 3.7.14,
* testing-library/jest-dom: 4.2.4,
* testing-library/react: 9.3.2,
* testing-library/user-event: 7.1.2,
* bootstrap: 5.2.3,
* jwt-decode: 2.2.0,
* react: 16.13.1,
* react-bootstrap: 2.7.0,
* react-dom: 16.13.1,
react-router-dom: 6.2.1,
react-scripts: 5.0.1
 
## Client Scripts:
* "start": "react-scripts start",
* "build": "react-scripts build",
* "test": "react-scripts test",
* "eject": "react-scripts eject"

## EslintConfig: 
* extends: react-app
  
## Browserslist: 
* production: 
">0.2%",
"not dead",
"not op_mini all"

## Development: 
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"


## Server Dependencies: 
* apollo-server-express": "^3.12.0",
* bcrypt: 4.0.1,
* express: 4.17.1,
* jsonwebtoken: 8.5.1,
* mongoose: 7.0.2

## Server Scripts:
* "start": "node server.js",
* "watch": "nodemon server.js"

## License: ISC,

## devDependencies: 
nodemon: 2.0.3

## Root Dependencies:

## Scripts: 
* "start": "node server/server.js,"
* "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\""
"install": "cd server && npm i && cd ../client && npm i,"
"build": "cd client && npm run build"

## License: ISC,

## devDependencies: 
* concurrently: 5.1.0
  
