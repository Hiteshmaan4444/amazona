import React, { useEffect, useReducer } from 'react';
//import data from '../data';
import { Link } from 'react-router-dom';
//import { useState } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  //const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: false,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', error: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div> Loading... </div>
        ) : error ? (
          <div> error </div>
        ) : (
          products.map((ele) => (
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
          ))
        )}
      </div>
    </>
  );
}

export default HomeScreen;
