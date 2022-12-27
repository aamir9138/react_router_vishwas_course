// import { Routes, Route } from 'react-router-dom';
// import { About } from './components/About';
// import { Home } from './components/Home';

// // without self closing tag
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/about" element={<About />}></Route>
//     </Routes>
//   );
// }

// // with self closing tag
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// }

// export default App;

// /* lecture 4 Links */
// import { Routes, Route } from 'react-router-dom';
// import { About } from './components/About';
// import { Home } from './components/Home';
// import { Navbar } from './components/Navbar';
// import { OrderSummary } from './components/OrderSummary';
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/order-summary" element={<OrderSummary />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// /* lecture 7 No Match Route */
// import { Routes, Route } from 'react-router-dom';
// import { About } from './components/About';
// import { Home } from './components/Home';
// import { Navbar } from './components/Navbar';
// import { NoMatch } from './components/NoMatch';
// import { OrderSummary } from './components/OrderSummary';
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/order-summary" element={<OrderSummary />} />
//         <Route path="*" element={<NoMatch />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// /* lecture 8 Nested Routes */
// import { Routes, Route } from 'react-router-dom';
// import { About } from './components/About';
// import { FeaturedProducts } from './components/FeaturedProducts';
// import { Home } from './components/Home';
// import { Navbar } from './components/Navbar';
// import { NewProducts } from './components/NewProducts';
// import { NoMatch } from './components/NoMatch';
// import { OrderSummary } from './components/OrderSummary';
// import { Products } from './components/Products';
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/order-summary" element={<OrderSummary />} />
//         <Route path="/products" element={<Products />}>
//           <Route path="featured" element={<FeaturedProducts />} />
//           <Route path="new" element={<NewProducts />} />
//         </Route>
//         <Route path="*" element={<NoMatch />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

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
