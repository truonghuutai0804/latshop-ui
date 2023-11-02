import React from 'react'
import { Button, Form, Nav } from 'react-bootstrap'
import './DangKy.scss'
import { Link } from 'react-router-dom'

const DangKy = () => {
  return (
    <div className='warp-signup mt-5 pt-5'>
        <Form className='w-100 form-signup rounded-3 p-3'>
            <Nav variant="pills" defaultActiveKey="/signup" className='justify-content-between border-bottom pb-2'>
                <Nav.Item>
                    <Nav.Link as={Link} to="/signin" eventKey="/signin" href='/signin' className='text-uppercase fw-bold'>Đăng nhập</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/signup" href='/signup' className='text-uppercase fw-bold'>Đăng Ký</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1 className='text-uppercase text-warning fw-bold p-3'>
                Đăng ký
            </h1>
            <Form.Group className="mb-3" >
                <Form.Label className='text-light'>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label className='text-light'>Password</Form.Label>
                <Form.Control
                    type="password"
                    aria-describedby="passwordHelpBlock"
                    className='border-2'
                />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label className='text-light'>Re-Password</Form.Label>
                <Form.Control
                    type="password"
                    aria-describedby="passwordHelpBlock"
                    className='border-2'
                />
            </Form.Group>
            <Button variant="primary" className='px-5 my-3 fw-bold'>Đăng ký</Button>
        </Form>
    </div>
  )
}

export default DangKy