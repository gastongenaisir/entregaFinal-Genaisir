import Table from 'react-bootstrap/Table';
import { useCartContext } from '../../context/CartContext';
import './CartTotal.scss';

const CartTotal = () => {
  const { totalPrice } = useCartContext();

  const total = totalPrice();

  return (
    <Table>
      <tbody>
        <tr>
          <td className='text-start cartTotal-txt'>TOTAL</td>
          <td className='text-end cartTotal-price'>${total}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartTotal;
