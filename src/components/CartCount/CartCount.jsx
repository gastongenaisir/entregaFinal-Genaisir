import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { maxStockAlert } from '../../helpers/sweetAlertFunctions';
import { useRef } from 'react';
import { useCartContext } from '../../context/CartContext';
import './CartCount.scss';

const CartCount = ({ qty, prod }) => {
  const { cartList, setCartList } = useCartContext(); 
  const plusBtn = useRef();
  const lessBtn = useRef();

  const changeItemQuantity = (product, e) => {
    const index = cartList.findIndex(ele => ele.id === product.id);
    const newProduct = cartList[index];
    const newCart = [...cartList];
    const setNewCart = () => {
      newCart.splice(index, 1, newProduct);
      setCartList([...newCart]);
    };
    if (
      product.qty >= 1 &&
      product.qty < product.stock &&
      e.target === plusBtn.current
    ) {
      newProduct.qty = newProduct.qty + 1;
      setNewCart();
    } else if (product.qty > 1 && e.target === lessBtn.current) {
      newProduct.qty = newProduct.qty - 1;
      setNewCart();
    } else if (product.qty === product.stock) {
      maxStockAlert(product.qty, product.stock, product.name); 
    }
  };

  return (
    <ButtonGroup className='cartCount d-grid'>
      <button
        className='btn--count'
        ref={lessBtn}
        onClick={e => changeItemQuantity(prod, e)}
      >
        -
      </button>
      <div className='count'>{qty}</div>
      <button
        className='btn--count'
        ref={plusBtn}
        onClick={e => changeItemQuantity(prod, e)}
      >
        +
      </button>
    </ButtonGroup>
  );
};

export default CartCount;
