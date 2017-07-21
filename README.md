# Simple React Starter

First, you will need [Node.js](https://nodejs.org/en/) and a text editor of your choice ([atom](https://atom.io/), [VSCode](https://code.visualstudio.com/), or [Sublime Text 3](https://www.sublimetext.com/3)).

## Getting Started

To start, install all the packages/library we require:

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

## Adding React Router

If you want to use [react-router](https://github.com/ReactTraining/react-router), you should use react-router-dom which is the new version 4.

```
> npm install react-router-dom
```
*with npm@5, --save is not required. It will automatically save to your package.json dependencies by default.*

If you are not using npm@5

```
> npm install react-router-dom --save
```

Also in your webpack config file, head over to the *output* section and make sure to add the public path

```js
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Add the public path below
    publicPath: '/',
    filename: '[name].bundle.js'
  },
```

### With React Router

When you build to production `npm run build` with react router and you wish to see your amazing project in the dist folder by opening up the index html, this will not work. React router needs a server. So if you want to see your production build project locally for any reasons, all you have to do is use [expressjs](http://expressjs.com/) or any framework and build a simple localhost server.

### Small Note (For people new to react)

You can just add publicPath: '/' just to be on the safe side and don't want to be bother if you wish to expand on this starter boilerplate. Let me quickly explain what happens with publicPath when you build to production in the most simplest and non-technical way. When you run `npm run build`, in the index.html file created in the dist folder will have the path to find both the css bundle and js bundle files. But with publicPath: '/' added, the index.html file won't be able to find the bundle files without a server.

**WITHOUT REACT-ROUTER, JUST REACT**

If you added the publicPath and you wish to see your production build application, you can fix this simply by deleting the '/' in front of the bundle files in your index.html file.
i.e. href="/main.bundle.css" -> href="main.bundle.css"

