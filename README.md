# **<Center>DOCUMENTATION</center>**
## **<center>Caserta Foundation React-Native App</center>**

**<justify>This README file was created using MarkDown Language. For more information on a MarkDown CheatSheet, go to the following link:</jusitfy>**

___

<br>

# **<center>TABLE OF CONTENTS</center>**

- [CheatSheet](#cheatsheet)

- [Referenced Videos](#reference-videos)

- [`Step #1` - Initializing your package.json](#step-1)

- [`Step #2` - Installing your packages](#step-2)

- [`Step #3` - Changing your scripts in `package.json`](#step-3)

- [`Step #4` - Adding a `app.js` file](#step-4)

- [`Step #5` - Starting your backend server](#step-5)

<br>

___

<br>

<h2><b>INSTALLING STANDALONE PROGRAMS</b></h2>

<BR>

- [Robo 3T](https://robomongo.org/)

<BR>

<h2 id="cheatsheet"><b>CheatSheet Reference</b></h2>

<br>

[MarkDown CheatSheet](https://www.markdownguide.org/cheat-sheet/)

[Extended CheatSheet](https://www.markdownguide.org/extended-syntax/)

<br>

___

<br>

<h2 id="reference-videos"><b>REFERENCED VIDEOS</b></h2>

<br>

[Video Reference Part #1](https://www.youtube.com/watch?v=m7uO85p-c0Q&t=876s&ab_channel=FullStackNiraj)

[Video Reference Part #2]()

<br>

___

<br>

<h2 id="step-1"><b>STEP #1 - NPM INIT</b></h2>

<br>

Create a fresh package.json file.

```` - [ ] npm init -y ````

<br>

___ 

<br>

<h2 id="step-2"><b>STEP #2 - INSTALLING YOUR PACKAGES</b></h2>

<br>

## Packages Installed

- Express
- Dotenv
- Mongoose
- Morgan
- Nodemon
- Multer
- Express-Validator (Express Validator is a middleware)
- Express-Async-Errors
- Cors

And for testing:

- Mocha
- Jest

<br>

___


<br>

<h2 id='step-3'><b>STEP #3 - CHANGE YOUR SCRIPTS</b></h2>

<br>

To make sure your backend server runs continously when as you make changes to it, edit some code inside your **package.json** file:

```
{   
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
    },
}
```

<br>

___
  
<br>

<h2 id='step-4'><b>STEP #4 - ADD A FILE </b></h2>

Make sure to add a file called `app.js` to your backend folder. "Case-sensitive".

<br>

___

<h2 id='step-5'><b>STEP #5 - STARTING YOUR BACKEND SERVER</b></h2>

<br>

Before you start any of your development servers, make sure you have at least 3 terminals started. One for your client, and one for your backend server, and 1 for your **package CLI**. 

To start running your backend development server enter the following command:

`npm run dev`

<br>

___

<br>

<h2 id='step-6'><b>STEP #6 - </b></h2>

<br>

<h2 id='step-6'><b>STEP #? - Validating Our Frontend</b></h2>