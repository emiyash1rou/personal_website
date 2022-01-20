# Personal Website
## Demonstrate CRUD operations

## 1. Setting UP Environment.
- Go to terminal and set up env environment.  ```py -m venv env```
- Make sure to turn on XAMPP Apache.
- ```npm init ```
- "nodejs-usermanagement" Name, then press enter to create package.json files
- Install dependencies
```
npm install express dotenv mysql ejs cookie-parser express-session nodemon

```
- Install nodemon by ```npm install --save-dev nodemon ```. This allows to instantly save and debug code as it fetches updates in real time.
- Add another line of code in package.json file. Go to scripts json file and do this
``` "start":"nodemon app.js" ```
## 2. Setting UP Express Server
- Create Directories
```
- public/css/
- public/images/
- views/layouts/main.ejs
- views/home.ejs
```

#### FOR DEPLOYMENT
- npm install -g heroku
- heroku login
- heroky create


