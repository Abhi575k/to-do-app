# ToDo App

A simple 'ToDo list' app created using nodejs.
It creates a web-app which stores data on a MongoDB database and modifies it upon adding/removing any item from list. The app persists data even after restarting server.

### Dependencies

It requires the following 'npm' packages:

* body-parser
* dotenv
* ejs
* express
* mongoose

Further, it requires a MongoDB server either hosted locally or on [MongoDB Atlas.](https://www.mongodb.com/)

### Usage

1. Clone this repository:
```
git clone https://github.com/Abhi575k/to-do-app.git
```
2. Traverse into the directory:
```
cd ./to-do-app
```
3. Install dependencies:
```
npm install
```
4. Create a MongoDB server either hosted locally or on [MongoDB Atlas](https://www.mongodb.com/) and paste it's 'uri' in a file named '.env' in root folder of this repository.

5. Run the server:
```
node app.js
```
To run it on a specefic port, add an additional command line arguement:
```
node app.js <port>
```

### Limitations

* The list cannot contain multiple item with the same name/task. Deletion of either will end up with deletion of all the tasks with the same name.