# React-flux-todo

This is an example of a particular flavor of React development.

It can be called "flux" because it shares most of what is called the "flux pattern" but it is just what at least one person considers to be "vanilla React done right".

It is intended primarily for smaller teams (i.e. 1-8 people touching the React code regularly) and fast iterations, since that's the way I like to work.
However it is not limited to small teams.

In short:

State flows down through React components (only).

The state object is treated as immutable (even though it is actually not).

Anything that needs to do so generates an "event" by calling a function `evt`.

The `evt` function turns these events into updates of the state object, and calls `render` again at the top level to update the React view.

Functional components are strongly preferred.

There's minimal styling in this repo because this example is intended to be prescriptive of React style and not anything else.

## Create-react-app

This project is built using create-react-app, if you're not familiar with that it pulls in react-scripts, so we don't have any other direct dependencies on Babel etc etc etc.
All you really need to know is `npm start`.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
