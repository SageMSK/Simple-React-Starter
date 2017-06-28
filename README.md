# Simple React Starter

First, you will need [Node.js](https://nodejs.org/en/) and a text editor of your choice ([atom](https://atom.io/), [VSCode](https://code.visualstudio.com/), or [Sublime Text 3](https://www.sublimetext.com/3)).

To start:

```
> npm install
> npm run dev
```

This boilerplate supports both CSS and SASS files. It's your choice. It also has basic eslint recommendation setting and extra react linting as well.

In order to run eslint:

```
> npm run lint
```

For Production:

```
> npm run build
```

## Small note

If you want to use [react-router](https://github.com/ReactTraining/react-router), just a small claimer from my learning experience. When you build to production without react-router, the build will work perfectly fine if you open the index.html file in your dist folder.

But with react-router, the build won't work without a server. If you were to open the index.html file, it won't be able to find the bundle.js files.

To build a simple localhost server to serve up your front-end react production application for you to inspect and see before you host it on a server, we will use [express.js](https://expressjs.com/) to create a local server on your machine.

In your terminal install expressjs:

```
> npm install express
```
*with npm@5, --save is not required. It will save by default.*

If you are not using npm@5

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