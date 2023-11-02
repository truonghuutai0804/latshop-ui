import React, { useState } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const QuanLyLoaiSanPham = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [edit, setEdit] = useState([])

  const text = 'Laptop Lenovo Legion 10'

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  return (
    <div className='py-3'>
      <h1 className='text-center text-uppercase fw-bold'>Quản Lý Loại Sản Phẩm</h1>
      <Table bordered hover responsive className='my-3'>
        <thead>
          <tr>
            <th className='text-center'>#</th>
            <th className='text-center'>Tên loại</th>
            <th className='text-center'>Số lượng</th>
            <th className='text-center'>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'>1</td>
            <td>Laptop</td>
            <td className='text-center'>10</td>
            <td className='text-center'>
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
            <td>PC</td>
            <td className='text-center'>105</td>
            <td className='text-center'>
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
            <td>Camera</td>
            <td className='text-center'>13</td>
            <td className='text-center'>
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

export default QuanLyLoaiSanPham