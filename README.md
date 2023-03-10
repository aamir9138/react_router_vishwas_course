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

## lecture 4 Links

- using an element in the UI to navigate to different route.
- previously we were changing URL in the browser to go to different routes
- so we need to make it interactive. for that add a Navbar with 2 links `Home` and `About`

![Navbar for links](./pictures/Navbar_links.PNG)

1. create a component `Navbar.js` in `components` folder.
2. import `Link` from `react-router-dom`.
3. write a `nav` tag. inside `nav` use `Link` components.
4. `Link` work as an anchor tag where instead of `href` we give path in `to` prop as below.

```
/* lecture 4 Links */
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
```

5. in `App.js` we can import the `Navbar` component as below

```
/* lecture 4 Links */
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
```

6. if we inspect the individual link in browser. we can see that these `Links` are actually `anchor tags`. and the `to` prop is and `href` attribute

![Link_to_anchor_tag](./pictures/Link_change_a_tag.PNG)

7. if we are navigating inside an application we must use `Link` with the Router but if we want to navigate outside of the application we can use anchor tag i.e `<a>` tag

## lecture 5 Active Links

- To style the active link differently we need to make changes both with `Link` component and the `css`.

### NavLink

- so instead of simple `Link` we have a `NavLink` which knows either the link is active or not
- what is so special about this `NavLink` is that by default it receive an `active` class when it is clicked.
- so we can change our `Navbar` component as below.

```
/* lecture 5 Active Links */
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
```

- we can inspect this in the browser to see the active class in the picture below.
  ![NavLink active class](./pictures/NavLink_active_class.PNG)

- with this active class we can add some styles in our CSS.

```
nav a.active {
  text-decoration: none;
  font-weight: bold;
}
```

- instead of CSS we may use js solution for styling the active link. in that solution the `NavLink` component provides `isActive` boolean value which will be applied the `style` prop depending if the link is active or not. the code will be something like this.

```
// for the js styling solution
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
    </nav>
  );
};
```

### Link or NavLink

- use `NavLink` for navbar items, breadcrums or areas where we need to change UI based on `active` class.
- for other routes in the application just use the `Link` component

## Navigating Programmatically

- in the picture below a scenario is presented. where if let say an order is placed the browser programmatically navigate you to the `order confirmation` page.

![Navigating Programmatically Scenario](./pictures/navigating_programmatically_scenario.PNG)

- for us we will simulate this with the onClick of the button navigate to the confirmation page.

1. create a component `OrderSummary.js`
2. in `Home` component create a button `place order`. on click of that button call the `navigate` function with the parameter of the `OrderSummary` component path.
3. the `navigate` function can be received from the `useNavigate()` hook from `react-router-dom`

```
/* lecture 6 Navigating Programmatically */
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate('/order-summary')}>place order</button>
    </>
  );
};
```

4. if we want to go back from the order-summary page we can use the same technique the only difference is that for the `go back` functionality use a number of `-1` as a parameter to the `navigate(-1)` function

```
/* lecture 6 navigating Programmatically */
import { useNavigate } from 'react-router-dom';
export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Confirmed</div>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
};
```

5. now you might want to replace the `history` instead of pushing a routes on to the stack. for that you can pass in an optional second `argument`.

6. so in `Home.js` to navigate function we pass in an optional second argument which is an `object` with a property `replace` set to true as below

```
// replacing history instead of pushing route to the stack
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate('/order-summary', { replace: true })}>
        place order
      </button>
    </>
  );
};
```

7. so if we `place order` and then press `go back` you will see that we come all the way back to the `google page`. This is because we replace the history.

## lecture 7 No Match Route

- let us take a look at configuring a `No Match Route` in a react application.
- currently if we go to a route which is not configured. for example `localhost:3000/user`. we don't see a UI below the Navbar.
- And if we take a look at the console we have a warning. `No routes matched location "/user"`. The scenario is displayed in the picture.
  ![no routes matched](./pictures/no_routes_matched_warning.PNG)
- This scenario is not favourable for a user point of view. A user might thing the app is still loading or there is an error in `/user` route.
- The better way would be to inform the user that the URL doesn't match any route in our application.
- To tackle this create a component which will be invoked if the URL given didn't match any of the other given routes.
- in `components` folder create `NoMatch.js` component. which will give a message `Page not found`.
- create a new `Route` in `App.js` with the `path='*'`. This route will match only when no other routes do.

```
/* lecture 7 No Match Route */
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
```

## lecture 8 Nested Routes

- uptill now we used `react-router` to switch between pages.
- what you should know that react router also help us to switch between a portion of a view inside a page.
- to demonstrate this create a new navlink for `products` page as seen below

![products page route](./pictures/product_page_route.PNG)

- the above scenario is familiar to us as before. let say now we have a scenario as below.

![nested routes products page](./pictures/nested_routes_products_page.PNG)

<u>first scenario</u>

- to implement the scenario use below code. create a new component `products`

```
/* lecture 8 Nested Routes */
export const Products = () => {
  return (
    <div>
      <input type="search" placeholder="Search Products" />
    </div>
  );
};
```

- call the `products` component upon the route to the path of `/products`

```
/* lecture 8 Nested Routes */
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
```

- Similarly add a NavLink for the products page on the `Navbar` component.

```
/* lecture 8 Nested Routes */
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
    </nav>
  );
};
```

<u> Second Scenario </u>

- in this scenario we have to include another navigation links with in the products component.

```
/* Scenario 2 Adding navigation links inside products page */
import { Link } from 'react-router-dom';
export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      {/* make sure not to use forward slash in front of 'featured'. Relative Paths (without '/') which
    we will learn about later on in the series */}
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
    </>
  );
};
```

- keep the styling change only the the `main navbar` for that we create a class `nav-primary` and apply those style to the main nav only.

```
/* lecture 8 Nested Routes */
/* applying styles to the main nav only scenario 2 */
.nav-primary {
  background-color: aliceblue;
  padding: 16px 32px;
}

nav a {
  margin-right: 16px
}
```

- Create 2 new components `FeaturedProducts.js` and `NewProducts.js`.
- now configure new routes for these 2 components. more specifically configure the nested routes.
- in `App.js` file we will make the following changes.

```
<Route path="/products" element={<Products />}>
  <Route path='featured' element={<FeaturedProducts/>}/>
  <Route path='new' element={<NewProducts/>}/>
</Route>
```

- so now the router knows how to route the child components but the `products` component still don't know where to list the component on the `products page` when we click one of `featured` or `new` link.
- for that 'react-router-dom' provides `Outlet` component. which we will use below the `nav` tag.

```
import { Link, Outlet } from 'react-router-dom';
export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      {/* make sure not to use forward slash in front of 'featured'. Relative Paths (without '/') which
    we will learn about later on in the series */}
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};
```

## lecture 9 Index Route

- The products page consist of 2 Nested route `Featured` link render the list of featured products and `New` link render the list of new products.
- The nested routes render only when the URL is `/products/feature` or `/products/new`.
- sometime you might want one of the child to render at the parent route level i.e at `/products`
- This can be achieved with the `index Route`.
- The index route is also going to be the Nested route. so with the products write below code
- here instead of `path` we use `index` prop as below

```
<Route index element={<FeaturedProducts/>}/>
```

- the full component is will look like this now

```
/* lecture 9 Index Route */
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
```

## lecture 10 Dynamic Routes

![dynamic routes](./pictures/dynamic_routes.PNG)

so if we have Dynamic routes for example we have a number of users `user1`, `user2`,`user3` and so on. it can be thousand. so each user we want to show the user detail. to implement this scenario

1. create `Users.js` component

```
/* lecture 10 Dynamic Routes */
export const Users = () => {
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
    </div>
  );
};
```

2. configure a route for this component

```
<Route path="users" element={<Users />} />
```

3. at `localhost:3000/users` we see the list of users
4. Create `UserDetails.js` components. it will render for all the users.

```
<Route path="users" element={<Users />} />
<Route path="users/1" element={<UserDetails />} />
<Route path="users/2" element={<UserDetails />} />
<Route path="users/3" element={<UserDetails />} />
```

5. this is not feasible solution. if we have 100 users we need that much line of code.
6. so instead of each user we provide `URL params` which is `/:userId`. we will use this within the path
7. this `:userId` param will match any value as long as the pattern is the same.

```
/* lecture 10 Dynamic Routes */
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Admin } from './components/Admin';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        {/* not feasible solution */}
        {/* <Route path="users" element={<Users />} />
        <Route path="users/1" element={<UserDetails />} />
        <Route path="users/2" element={<UserDetails />} />
        <Route path="users/3" element={<UserDetails />} /> */}

        {/* feasible solution with URL params */}
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetails />} />

        {/* for the admin user */}
        <Route path="users/admin" element={<Admin />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
```

8. The `:userId` can be any string and not just a number. so it will output the same result even for `users/admin`. in order to have a separate message for `admin`. create a new component `Admin.js` and provide the path to the route.

### dynamic routes can be Nested as well

so the dynamic component we will put it as childs. and import the `Outlet` component in `User.js` component so that the child component will render there.

```
// Nested Dynamic routes
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Admin } from './components/Admin';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        {/* not feasible solution */}
        {/* <Route path="users" element={<Users />} />
        <Route path="users/1" element={<UserDetails />} />
        <Route path="users/2" element={<UserDetails />} />
        <Route path="users/3" element={<UserDetails />} /> */}

        {/* feasible solution with URL params */}
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
```

```
/* lecture 10 Dynamic Routes */
import { Outlet } from 'react-router-dom';
export const Users = () => {
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
    </div>
  );
};
```

```
// change nested dynamic route in response to the user click. (Homework)
// useHistory hook is not working. homework still pending
import { useHistory } from 'react-router-dom';

export const Users = () => {
  const history = useHistory();

  const handleUserClick = (user) => {
    history.push(`/users/${user}`);
  };
  return (
    <div>
      {[1, 2, 3].map((user) => (
        <li key={user} onClick={() => handleUserClick(user)}>
          {`User ${user}`}
        </li>
      ))}
    </div>
  );
};
```

## lecture 11 URL Params

In a typical application we want to extract the `userId` and use that userId for other things. perhaps making an API call to fetch the details about that user. for our scenario we will only display the user id.

- to extract the route parameters we need to import a hook `useParams` from `react-router` package.
- `useParams hook` returns an object of key value pairs. lets called it `params`. This params will contain the dynamic params of key value pair from the current URL.
- we can extract the userId from `params`.

```
/* lecture 11 URL Params */
import { useParams } from 'react-router-dom';
export const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return <div>Details about user {userId}</div>;
};
```

- now if we navigate to `http://localhost:3000/users/1` we see the details about the user 1.
- and if we navigate to `http://localhost:3000/users/100` we see the details about the user 100.

We can also destructure the userId in the same line as below

```
// destructure userId in the same line
import { useParams } from 'react-router-dom';
export const UserDetails = () => {
  const { userId } = useParams();
  return <div>Details about user {userId}</div>;
};
```

## lecture 12 Search Params

URL Params is not the only way to add parameters to the route. we can also add an optional query string. for example at the end of `http://localhost:3000/users/1` we can add `?filter=active`. so the URL will become
`http://localhost:3000/users/1?filter=active`. These parameters are called `Search Params` in react routers.

### Scenario

![search params scenario](./pictures/search_params_scenario.PNG)

### implementation

1. create 2 buttons in `user.js` component

```
      <div>
        <button>Active Users</button>
        <button>Reset Filter</button>
      </div>
```

2. onClick of these buttons we need to add or remove the `search params`. to deal with `search params` react router provide a hook called `useSearchParams`. This hook behave similar to the useState hook in react. instead of storing state in the memory though it is stored in the URL when the component invoke the hook.

- The hook returns 2 values of which first one is an object which we will called `searchParams` and the second is `setSearchParams`. onClick of button we will use this as below.

```
import {useSearchParams } from 'react-router-dom';

const [searchParams, setSearchParams] = useSearchParams();

      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
```

3. To set the object value we use `setSearchParams` and if we want to get the values we use the `get method` on `searchParams` object. here we will use the get method to get the value of the `filter` and on the basis of that show either acitve users or all users.

```
/* lecture 12 Search Params */
import { Outlet, useSearchParams } from 'react-router-dom';
export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>showing active users</h2>
      ) : (
        <h2>showing all users</h2>
      )}
    </div>
  );
};
```

## lecture 13 Relative Links

To understand this lets go back to product page.

- at the moment when we click on `Featured` the URL changes to `http://localhost:3000/products/featured` and when we click on `New` it changes to `http://localhost:3000/products/new` and that is because of the `relative link` that we specified.

### Absolute Link

- if we wish to use the absolute path the path will not be `to=/freatured` and `to=/new` this will construct a path from the route of the app and not the current URL. if we make changes like this it will navigate to `http://localhost:3000/featured` and `http://localhost:3000/new` respectively which is not the correct behaviour. the links will break.

- to make this work with absolue link we need to add `to=/products/featured` and `to=/products/new`

```
// Scenario 1 using absolute links
import { Link, Outlet } from 'react-router-dom';
export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <Link to="/products/featured">Featured</Link>
        <Link to="/products/new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};
```

### Relative Link

A relative link is a link which doesn't start with a forwar slash `/` and will inherit the closest route in which they are rendered.

```
// Scenario 2 using relative links
import { Link, Outlet } from 'react-router-dom';
export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};
```

Absolute Links are still valid and make more sense for the links like the navigation bar.

## lecture 14 Lazy Loading

Lazy loading is a technique where the components not require on the `Home` page can be split into bundles and download it only when the user navigate to that page. you can think of it as incrementally downloading the application.

- it helps reduce initial load time there by improve the performance. for our example lets learn how to lazy load the `About` page.

1. first we will make the `About` component bulky on purpose. go to `https://www.lipsum.com/` and generate 20 paragraph of text and paste it to `About` component. when we empty cache and reload. it took around 2.92 second for the `About` page to load.

![About page load time](./pictures/about_page_bundle_loadtime.PNG)

2. now we will lazy load the `About` page and observe the difference.

### Lazy Loading a route

To lazy load a route we need to use `dynamic imports` and `react suspense`.

1. dynamic import the `About` component in `App.js`. for that we need to export `About` as a `default` first.
2. `react` has a built-in `lazy()` function. we will use that.
3. `lazy()` takes as an argument another function. This argument calls a dynamic import

```
const LazyAbout = React.lazy(() => import('./components/About'))
```

A promise is return by this dynamic import which is then converted into a module that contains a default exported react component which is our `About` component

4. we include the `LazyAbout` component as part of the route configuration.

```
<Route path="about" element={<LazyAbout />} />
```

we will receive an error when we move to `About` link.
`Uncaught Error: A React component suspended while rendering, but no fallback UI was specified.` To fix this error we have to use the suspense component from react and a fallback.

```
/* lecture 14 Lazy Loading */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { About } from './components/About';
import { Admin } from './components/Admin';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';
const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
```

I followed the lecture but lazy loading is not working properly. we need to search about it.
