# Project Structure

This is the current project structure for our web application. 

```
.
├── bin
├── data
├── models
├── public
|   ├── fonts
|   ├── images
|   ├── javascripts
|   └── stylesheets
├── routes
├── specs
├── views
|   ├── partials
|   └── layouts
├── app.js
├── notes.md
├── package.json
└── README.md
```

The **public** folder serves as the basic file system, with the expressjs routing layered over the top of the application. This holds all the static files for the website, including image, scripts, stylesheets and fonts. 

The **models** , **routes**, and **views** folder serve as the basis for the expressjs web appication itself. These folders contain the component pieces for the application. The handlebars routing engine [express-hbs](https://github.com/barc/express-hbs) this allows for [partials](), [content-sections]() and [layouts]().

The **specs** folder contains Ui Tests for the application. These tests use [Protractor]() to automatically test the UI functionality in the browser from the command line. Protractor  starts the browser up for you and clicks the buttons and links, then validates it gets the correct response from the browser. This saves a lot of manual work and it is a lot easier to just run a test suite before checking in code than manually going through each feature to check if you've broken something. The **data** folder contains the basic setup data for a new database, this should allow automated testing to run on a fresh database.

The [package.json]() file keeps the dependencies  and development dependencies (dependencies not required on the server) for the project. This file also has a [scripts]() section that allows you to add a command to `npm run` like `npm run update-database` this  would look something like the following in the [package.json]() file.
```
"scripts": {
    "update-database": "node ./update-database.js"
},
```

The app.js and the bin/www file are essentially the [expressjs]() server itself, all the parameters for configuring the server such as [PORT]() are passed into these files.

