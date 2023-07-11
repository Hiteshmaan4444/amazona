import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>

        <div className="products">
          {data.products.map((ele) => (
            <div className="product" key={ele.slug}>
              <a href={`/product/${ele.slug}`}>
                <img src={ele.images} alt={ele.name} />
              </a>
              <div className="label">
                <a href={`/product/${ele.slug}`}>
                  <p>{ele.name}</p>
                </a>
                <p>
                  <strong>${ele.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
