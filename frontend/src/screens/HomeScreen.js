import React, { useEffect } from 'react';
//import data from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((ele) => (
          <div className="product" key={ele.slug}>
            <Link to={`/product/${ele.slug}`}>
              <img src={ele.images} alt={ele.name} />
            </Link>
            <div className="label">
              <Link to={`/product/${ele.slug}`}>
                <p>{ele.name}</p>
              </Link>
              <p>
                <strong>${ele.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeScreen;
