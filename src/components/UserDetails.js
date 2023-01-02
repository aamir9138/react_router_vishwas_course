// /* lecture 10 Dynamic Routes */
// export const UserDetails = () => {
//   return <div>List of User Details</div>;
// };

/* lecture 11 URL Params */
// import { useParams } from 'react-router-dom';
// export const UserDetails = () => {
//   const params = useParams();
//   const userId = params.userId;
//   return <div>Details about user {userId}</div>;
// };

// destructure userId in the same line
import { useParams } from 'react-router-dom';
export const UserDetails = () => {
  const { userId } = useParams();
  return <div>Details about user {userId}</div>;
};
