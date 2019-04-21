# Tiny-Improvements

## Overview
Tiny Improvements is a full stack application that was built through javascript. It allows preloaded users to send kudos to complement other preloaded users and post them on the page for others to view. Users can also delete kudos if they want.

## Technologies Used
Front End
1. HTML/CSS - framework: bootstrap; some custom CSS
2. Javascript: jQuery, bootstrap js cdn

Back End
1. Server: node.js; Packages used: express
2. Database: mongoDB
3. Middleware: Mongoose

## Routing Documentation
- "GET": /api/users
    - retrieves users collection
- "POST": /api/users
    - posts a user to the collection (used to populate in postman)
- "POST": /api/kudos
    - posts a kudo to the collection
- "GET": /api/kudos
    - retrieves all kudos
- "DELETE": /api/kudos
    - deletes a kudo based on id

## Future Development
A possible direction for future development is the ability for users to log in and private message users.

## Deployed Link
[Tiny Improvements](https://tiny-improvements-hw.herokuapp.com/)
