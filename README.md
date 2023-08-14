# Freelancer Web App

## Description
Freelancer is a web app that allows users to create a profile and post their services. Users can also search for services and contact the service provider. It is built using MERN stack. This project is part of web developer internship at [DevLinx Technologies](https://devlinxtechnologies.github.io/DevLinxTechnologies/)  done by group of web developers interns.

## clone or download
```terminal
$ git clone https://github.com/romanfarooq/freelancer-website.git
```

## project structure
```terminal
README.md
server/
   package.json
   .gitignore
client/
   package.json
   .env (create .env file, check [Configuration and Setup session])
   .gitignore
...
```

## Installation

### Client
```terminal
$ cd client          // go to client folder
$ npm install        // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build      // this will create a optimized production build
```

### Server
```terminal
$ cd server         // go to server folder
$ npm install       // npm install packages
$ npm run dev       // run it locally
```

## Configuration and Setup
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)

In the terminal
- cd server and create a .env file in the root of your server directory.
- Supply the following credentials

```
PORT=
MONGO_URI=
JWT_SECRET=
JWT_EXPIRE=
OTP_EXPIRE=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
EMAIL_SERVICE=
EMAIL_USERNAME=
EMAIL_PASSWORD=
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Technologies
- [React](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Json Web Token](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Nodemailer](https://nodemailer.com/about/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Cloudinary](https://cloudinary.com/)
