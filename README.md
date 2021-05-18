# My-facebook

Demo-Website:https://trusting-wiles-523082.netlify.app/

## Introduction

My-facebook is a Full-Stack MERNG application. It is a tiny social app where user can create an account and login account. In the home page, user can see all the posts, and like it or comment it. User can also create his own post as well. Only user who log in can delete his own post/comment.

In the back-end, this app use apollo server to design graphQL api. The database is using MongoDB and mongoose ODM to talk to databse.
This app is build fully functional user authentication and authorization. User password is save using bcrypt and using jwt-base authentication to recogize user when they login.

The back-end is using GraphQL to perform similar 'RESTful' api, but more flexibility.

In front-end it is using appollo/client to fetch or mutation data from back-end. React router to create single page application. JWT decoder to send user authorization information. Semantic ui for styling.
