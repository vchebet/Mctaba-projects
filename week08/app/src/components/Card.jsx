


import "./Card.css"

function Card({ image, name, price, inStock, isNew }) {
  return (
    <div className="card">

      {isNew && <span className="new">New Arrival</span>}

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p className="price">${price}</p>

      {inStock ? (
        <p className="stock">In Stock</p>
      ) : (
        <p className="out">Out of Stock</p>
      )}

    </div>
  )
}

export default Card


