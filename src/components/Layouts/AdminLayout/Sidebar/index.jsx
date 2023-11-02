import React from 'react'
import { Nav, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    var active = ''

    switch(window.location.pathname){
        case '/admin/accounts':
            active = '5'
            break;
        case '/admin/orders':
            active = '4'
            break;
        case '/admin/categories':
            active = '3'
            break;
        case '/admin/products':
            active = '2'
            break;
        default:
            active = '1'
    }

    return (
        <div className='border'>
            <Tab.Container defaultActiveKey={active}>
                <Nav variant="pills" className="flex-column mt-5">
                    <Nav.Item>
                        <Nav.Link as={Link} eventKey="1" className='text-dark fw-bold py-3' to='/admin'>Thống kê</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} eventKey="2" className='text-dark fw-bold py-3' to='/admin/products'>Quản Lý Sản Phẩm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} eventKey="3" className='text-dark fw-bold py-3' to='/admin/categories'>Quản Lý Loại Sản Phẩm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} eventKey="4" className='text-dark fw-bold py-3' to='/admin/orders'>Quản Lý Đơn Hàng</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} eventKey="5" className='text-dark fw-bold py-3' to='/admin/accounts'>Quản Lý Tài Khoản</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Tab.Container>
        </div>
    )
}

export default Sidebar