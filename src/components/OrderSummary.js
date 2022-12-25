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
