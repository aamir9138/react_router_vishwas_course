# react_router_vishwas_course (react-router version 6 !!!)

## lecture 1 Introduction

### what is React Router?

- it is a fully-featured client and server-side routing library for React
- it helps create and navigate between different URLs that make up your web application
- it provides unique URLs for different components in the app and makes UI easily shareable with other users

## lecture 2 Installation and setup

1. run this in terminal `npx create-react-app react-router-demo`
2. install react-router-dom version 6

```
npm install react-router-dom@6
```

## lecture 3 Configuring routes

1. take a scenario for configuring routesas mentioned in the image below. at `/` Home page and at `/about` About page
   ![configuring routes](./pictures/configuring_routes_scenario.PNG)

2. To implement this scenario with a `router`. follow the below steps

### Step 1 import BrowserRouter from react-router-dom

- in index.js file import it as below

```
import { BrowserRouter } from 'react-router-dom'
```

### Step 2

- in `index.js` wrap the `<App/>` component in `<BrowserRouter></BrowserRouter>`

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />         // here I mean
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

### Configure the routes in App.js

1. create `components` folder in `src`.
2. create 2 components inside it named as `Home.js` and `About.js`.
3. for the routes configuration we need 2 components `Routes` and `Route` in `App.js` from `react-router-dom`

```
import { Routes, Route} from 'react-router-dom'
```

4. use `Routes` and `Route` component as below and pass the props of `path` and `element`
5. `path` will take the value of `/` and `/about` depending on the which component we want to show
6. `element` will the the component name like `Home` or `About`

```
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default App;
```

7. we can make `Route` a self closing tag like below

```
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
```

8. important keywords in todays lecture:

- package: `react-router-dom`
- components: `BrowserRouter`, `Routes`, `Route`
- props: `path`, `element`
