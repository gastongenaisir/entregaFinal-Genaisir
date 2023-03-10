import Spinner from 'react-bootstrap/Spinner';
import './Loading.scss';

const Loading = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      className='spinner-container'
    >
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
};

export default Loading;
