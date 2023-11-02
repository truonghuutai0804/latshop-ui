import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import Header from './Header.jsx'

function AdminLayout({children}) {
  return (
    <>
    <Container fluid >
      <Row>
        <Col md={3}><Sidebar/></Col>
        <Col md={9}>
          <Header/>
          {children}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default AdminLayout