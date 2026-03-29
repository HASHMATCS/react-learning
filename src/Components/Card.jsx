import React from 'react'

const Card = ({product}) => {
  return (
    <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.title}
                style={{height: "200px", objectFit: "cover"}}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title} {" "}
                  <span className="text-primary">${product.price}</span>
                </h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
  )
}

export default Card