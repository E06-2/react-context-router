import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MyContext from '../../context/MyContext';

const ProductDetail = () => {
  const context = useContext(MyContext);
  const { auth } = context;

  const navigate = useNavigate();
  const location = useLocation();
  const { title, thumbnailUrl } = location.state;

  useEffect(() => {
    !auth && navigate('/');
  }, [auth, navigate]);

  return (
    <section className='details'>
      <p>{title}</p>
      <img src={thumbnailUrl} alt={title} />
      <button onClick={() => navigate(-1)}>Return</button>
    </section>
  );
};

export default ProductDetail;
