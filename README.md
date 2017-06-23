# Simple React Starter

First, You need [node.js](https://nodejs.org/en/) and a text editor.



To start:

```
> npm install
> npm run dev
```

This boilerplate is able to support both CSS and SASS files. It's your choice. It also has basic eslint recommendation setting and extra react linting.

In order to run/check linting:

```
> npm run lint
```

For Production:

```
> npm run build
```

## Small note

If you want to use [react-router](https://github.com/ReactTraining/react-router), just a small claimer from my learning experience. When you build to production without react-router, the build will work perfectly fine. You can open the index.html file in your dist folder.

But with react-router, the build won't work without a server. If you were to open the index.html file, it won't be able to find the files.

To build a simple localhost server to serve up your front-end react production for you to see before you host it on a server, we will use [express.js](https://expressjs.com/).

In your terminal install expressjs:

```
> npm install express
```
*with npm 5, --save is not required. It will save by default.*

If you are not using NPM 5

```
> npm install express --save
```

then we will create a *server.js* file on the root directory.
In the server.js file:

```js
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express App running on PORT: ${server.address().port}`);
});
```

You can see this on your browser on **localhost:3000**.