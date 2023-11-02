import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import product from '../../../../assets/images/slide1.jpg'
import { Link } from 'react-router-dom'
import './Product.scss'

const Products = (props) => {
  return (
  <>
    <Row className='px-3'>
    {[...Array(8)].map((item, idx) => (
        <Col key={idx} className='pt-3 '>
            <Link to='/product/abc'>
                <Card style={{ width: '18rem' }} className='product border-2' >
                    <Card.Img variant="top" src={product}/>
                    <Card.Body>
                        <Card.Title className='fw-bold text-dark'>{props.name}</Card.Title>
                        <Card.Text className='text-end text-danger'>{props.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    ))}
    </Row>
  </>
  )
}

export default Products