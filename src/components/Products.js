// /* lecture 8 Nested Routes */
// export const Products = () => {
//   return (
//     <div>
//       <input type="search" placeholder="Search Products" />
//     </div>
//   );
// };

/* Scenario 2 Adding navigation links inside products page */
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
