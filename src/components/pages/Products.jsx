import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import MyContext from '../../context/MyContext';

const Products = () => {
  const context = useContext(MyContext);
  const { results, loading, error, auth } = context;

  const navigate = useNavigate();

  useEffect(() => {
    !auth && navigate('/');
  }, [auth, navigate]);

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  if (error) return <p>{error}</p>;

  const items = results.map((item) => (
    <li key={item.id}>
      <Link to='/product-detail' state={item}>
        <p>{item.title}</p>
      </Link>
    </li>
  ));

  return <section>{items}</section>;
};

export default Products;
