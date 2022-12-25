// export const Home = () => {
//   return <div>Home</div>;
// };

// /* lecture 6 Navigating Programmatically */
// import { useNavigate } from 'react-router-dom';
// export const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div>Home</div>
//       <button onClick={() => navigate('/order-summary')}>
//         place order
//       </button>
//     </>
//   );
// };

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
