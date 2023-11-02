import React, { useState } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const QuanLySanPham = () => {
  const [showSee, setShowSee] = useState(false);
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

  return (
    <div className='py-3'>
      <h1 className='text-center text-uppercase fw-bold'>Quản Lý Sản Phẩm</h1>
      <Table bordered hover responsive className='my-3'>
        <thead>
          <tr>
            <th className='text-center'>#</th>
            <th className='text-center'>Tên sản phẩm</th>
            <th className='text-center'>Loại sản phẩm</th>
            <th className='text-center'>Thương hiệu</th>
            <th className='text-center'>Giá</th>
            <th className='text-center'>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>1</td>
            <td>Laptop Lenovo Legion 5</td>
            <td>Laptop</td>
            <td>Lenovo</td>
            <td>28.990.000₫</td>
            <td className='text-center'>
              <Button variant="primary me-2 my-1" onClick={handleShowSee}>
                <FaEye/>
              </Button>
              <Button variant="success me-2 my-1" onClick={handleShowEdit}>
                <FaEdit/>
              </Button>
              <Button variant="danger me-2 my-1" onClick={handleShowDelete}>
                <FaTrash/>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='text-center'>2</td>
            <td>Laptop Lenovo Legion 10</td>
            <td>Laptop</td>
            <td>Lenovo</td>
            <td>28.990.000₫</td>
            <td className='text-center'>
              <Button variant="primary me-2 my-1" onClick={handleShowSee}>
                <FaEye/>
              </Button>
              <Button variant="success me-2 my-1" onClick={handleShowEdit}>
                <FaEdit/>
              </Button>
              <Button variant="danger me-2 my-1" onClick={handleShowDelete}>
                <FaTrash/>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='text-center'>3</td>
            <td>Laptop Lenovo Legion 15</td>
            <td>Laptop</td>
            <td>Lenovo</td>
            <td>28.990.000₫</td>
            <td className='text-center'>
              <Button variant="primary me-2 my-1" onClick={handleShowSee}>
                <FaEye/>
              </Button>
              <Button variant="success me-2 my-1" onClick={handleShowEdit}>
                <FaEdit/>
              </Button>
              <Button variant="danger me-2 my-1" onClick={handleShowDelete}>
                <FaTrash/>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

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
    </div>
  )
}

export default QuanLySanPham