// /* lecture 10 Dynamic Routes */
// import { Outlet } from 'react-router-dom';
// export const Users = () => {
//   return (
//     <div>
//       <h2>User 1</h2>
//       <h2>User 2</h2>
//       <h2>User 3</h2>
//       <Outlet />
//     </div>
//   );
// };

// // change nested dynamic route in response to the user click. (Homework)
// // useHistory hook is not working. homework still pending
// import { useHistory } from 'react-router-dom';

// export const Users = () => {
//   const history = useHistory();

//   const handleUserClick = (user) => {
//     history.push(`/users/${user}`);
//   };
//   return (
//     <div>
//       {[1, 2, 3].map((user) => (
//         <li key={user} onClick={() => handleUserClick(user)}>
//           {`User ${user}`}
//         </li>
//       ))}
//     </div>
//   );
// };

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
