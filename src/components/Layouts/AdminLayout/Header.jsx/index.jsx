import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './Header.scss'

const Header = () => {
  return (
    <div className='background-info rounded-3 py-3 ps-3 d-flex justify-content-between'>
        <h1 className='fw-bold text-light ps-3'>Trang quản trị lat Shop</h1>
        <Dropdown className='pe-3'>
            <Dropdown.Toggle  className="info py-2" id="dropdown-basic">
                Admin lat
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Thông tin cá nhân</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Quản lý bảo mật</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Header