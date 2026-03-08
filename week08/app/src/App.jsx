import Navbar from "./components/Navbar"
import Card from "./components/Card"



function App() {


  

  return (
    <>
      <Navbar />

      <div className="products">
        {products.map(function(product, index) {
          return (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              inStock={product.inStock}
              isNew={product.isNew}
            />
          );
        })}
      </div>

    </>
  )
}

export default App