import React, { useState } from 'react'
import { Button, Form, Modal, Tab, Table, Tabs } from 'react-bootstrap';
import { FaEdit, FaEye, FaLock, FaTrash } from 'react-icons/fa';
import './QuanLyTaiKhoan.scss'

const QuanLyTaiKhoan = () => {
  const [showSee, setShowSee] = useState(false);
  const [showLock, setShowLock] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [edit, setEdit] = useState([])

  const text = 'Laptop Lenovo Legion 10'

  const handleCloseSee = () => setShowSee(false);
  const handleShowSee = () => setShowSee(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const handleCloseLock = () => setShowLock(false);
  const handleShowLock = () => setShowLock(true);

  return (
    <div className='py-3'>
      <h1 className='text-center text-uppercase fw-bold'>Quản Lý Tài Khoản</h1>
      <Tabs
        defaultActiveKey="users"
        id="justify-tab-example"
        className="mb-3 taikhoan"
        justify
      >
        <Tab eventKey="admin" title="Quản trị viên" className='text-dark'>
          <Table bordered hover responsive className='my-3'>
            <thead>
              <tr>
                <th className='text-center'>#</th>
                <th className='text-center'>Tài khoản</th>
                <th className='text-center'>Họ và tên</th>
                <th className='text-center'>Vai trò</th>
                <th className='text-center'>Trạng thái</th>
                <th className='text-center'>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-center'>1</td>
                <td>Admin_lat</td>
                <td>lat King</td>
                <td className='text-center'>Quản trị viên</td>
                <td className='text-center text-success'>Đang hoạt động</td>
                <td className='text-center'>
                  <Button variant="primary me-2 my-1" onClick={handleShowSee}>
                    <FaEye/>
                  </Button>
                  <Button variant="success me-2 my-1" onClick={handleShowEdit}>
                    <FaEdit/>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="staffs" title="Nhân viên">
          <Table bordered hover responsive className='my-3'>
            <thead>
              <tr>
                <th className='text-center'>#</th>
                <th className='text-center'>Tài khoản</th>
                <th className='text-center'>Họ và tên</th>
                <th className='text-center'>Vai trò</th>
                <th className='text-center'>Trạng thái</th>
                <th className='text-center'>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-center'>2</td>
                <td>Moon_moon</td>
                <td>Vua Mặt Trăng</td>
                <td className='text-center'>Nhân viên</td>
                <td className='text-center text-success'>Đang hoạt động</td>
                <td className='text-center'>
                  <Button variant="primary me-2 my-1" onClick={handleShowSee}>
                    <FaEye/>
                  </Button>
                  <Button variant="success me-2 my-1" onClick={handleShowEdit}>
                    <FaEdit/>
                  </Button>
                  <Button variant="warning me-2 my-1" onClick={handleShowLock}>
                    <FaLock/>
                  </Button>
                  <Button variant="danger me-2 my-1" onClick={handleShowDelete}>
                    <FaTrash/>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="users" title="Khách hàng">
          <Table bordered hover responsive className='my-3'>
            <thead>
              <tr>
                <th className='text-center'>#</th>
                <th className='text-center'>Tài khoản</th>
                <th className='text-center'>Họ và tên</th>
                <th className='text-center'>Vai trò</th>
                <th className='text-center'>Trạng thái</th>
                <th className='text-center'>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-center'>3</td>
                <td>Camera_men</td>
                <td>Tử Thần Thủy</td>
                <td className='text-center'>Khách hàng</td>
                <td className='text-center text-warning'>Tạm khóa</td>
                <td className='text-center'>
                  <Button variant="primary me-2 my-1" onClick={handleShowSee}>
                    <FaEye/>
                  </Button>
                  <Button variant="success me-2 my-1" onClick={handleShowEdit}>
                    <FaEdit/>
                  </Button>
                  <Button variant="warning me-2 my-1" onClick={handleShowLock}>
                    <FaLock/>
                  </Button>
                  <Button variant="danger me-2 my-1" onClick={handleShowDelete}>
                    <FaTrash/>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>

      <Modal show={showSee} onHide={handleCloseSee} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết Laptop Lenovo Legion 10</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table hover responsive className='my-3'>
              <tr>
                <th className='py-2'>Mã sản phẩm:</th>
                <td>01</td>
              </tr>
              <tr>
                <th className='py-2'>Tên sản phẩm:</th>
                <td>Laptop Lenovo Legion 10</td>
              </tr>
              <tr>
                <th className='py-2'>Loại sản phẩm:</th>
                <td>Laptop</td>
              </tr>
              <tr>
                <th className='py-2'>Thương hiệu:</th>
                <td>Lenovo</td>
              </tr>
              <tr>
                <th className='py-2'>Giá:</th>
                <td>28.990.000₫</td>
              </tr>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSee}>
            Hủy bỏ
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Sửa Laptop Lenovo Legion 10</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mã sản phẩm:</Form.Label>
              <Form.Control type="text" value="01" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tên sản phẩm:</Form.Label>
              <Form.Control 
                type="text" 
                defaultValue={text}
                name="TenSP" 
                onChange={(e) => setEdit({ ...edit, [e.target.name]: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Loại sản phẩm:</Form.Label>
              <Form.Control 
                type="text" 
                defaultValue={text}
                name="Loai" 
                onChange={(e) => setEdit({ ...edit, [e.target.name]: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Thương hiệu:</Form.Label>
              <Form.Control 
                type="text" 
                defaultValue={text}
                name="ThuongHieu" 
                onChange={(e) => setEdit({ ...edit, [e.target.name]: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Giá:</Form.Label>
              <Form.Control 
                type="text" 
                defaultValue={text}
                name="Gia" 
                onChange={(e) => setEdit({ ...edit, [e.target.name]: e.target.value })}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Hủy bỏ
          </Button>
          <Button variant="success" onClick={handleCloseEdit}>
            Lưu lại
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleCloseDelete} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Xóa bỏ Laptop Lenovo Legion 10</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc muốn xóa bỏ sản phẩm Laptop Lenovo Legion 10 hay không ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Hủy bỏ
          </Button>
          <Button variant="danger" onClick={handleCloseDelete}>
            Xóa bỏ
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showLock} onHide={handleCloseLock} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Khóa tài khoản Laptop Lenovo Legion 10</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc muốn tạm khóa tài khoản hay không ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLock}>
            Hủy bỏ
          </Button>
          <Button variant="danger" onClick={handleCloseLock}>
            Khóa lại
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default QuanLyTaiKhoan