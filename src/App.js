import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';

// // without self closing tag
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/about" element={<About />}></Route>
//     </Routes>
//   );
// }

// with self closing tag
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
