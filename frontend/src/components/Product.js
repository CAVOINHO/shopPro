import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

Product.propTypes = {}

function Product({ product }) {
  return (
    <Card className='my-3 rounded  product-card'>
      <div className='image-product'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>
      </div>
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          className='text-decoration-none title-product'
        >
          <Card.Title as='div' style={{ fontSize: '0.9rem' }}>
            <strong>{product.name.substring(0, 30)}...</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' className='rating-product pb-2'>
          <Link
            to={`/product/${product._id}`}
            className='text-decoration-none title-product'
          >
            <Rating
              value={product.rating}
              text={`(${product.numReviews} reviews)`}
            />
          </Link>
        </Card.Text>
        <Link
          to={`/product/${product._id}`}
          className='text-decoration-none title-product'
        >
          <Card.Text as='h6'>${product.price}</Card.Text>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Product
