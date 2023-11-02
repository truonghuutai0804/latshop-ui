import React, { useState } from 'react'
import { Button, Modal, Tab, Table, Tabs } from 'react-bootstrap';
import { FaEdit, FaEye } from 'react-icons/fa';

const QuanLyDonHang = () => {
    const [showSee, setShowSee] = useState(false);
  const [showEdit, setShowEdit] = useState(false);



  const handleCloseSee = () => setShowSee(false);
  const handleShowSee = () => setShowSee(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);


  return (
    <div className='py-3'>
      <h1 className='text-center text-uppercase fw-bold'>Quản Lý Tài Khoản</h1>
      <Tabs
        defaultActiveKey="unapproved"
        id="justify-tab-example"
        className="mb-3 taikhoan"
        justify
      >
        <Tab eventKey="unapproved" title="Chưa duyệt">
          <Table bordered hover responsive className='my-3'>
            <thead>
                <tr>
                    <th className='text-center'>#</th>
                    <th className='text-center'>Mã đơn</th>
                    <th className='text-center'>Khách hàng</th>
                    <th className='text-center'>Nhân viên</th>
                    <th className='text-center'>Số sản phẩm</th>
                    <th className='text-center'>Số lượng mua</th>
                    <th className='text-center'>Thao tác</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-center'>1</td>
                <td>0001</td>
                <td >Tử Thần Thủy</td>
                <td >Vua Mặt Trăng</td>
                <td className='text-center'>3</td>
                <td className='text-center'>5</td>
                <td className='text-center'>
                  <Button variant="success me-2 my-1" onClick={handleShowEdit}>
                    <FaEdit/>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="approved" title="Đã duyệt">
        <Table bordered hover responsive className='my-3'>
            <thead>
              <tr>
                <th className='text-center'>#</th>
                <th className='text-center'>Mã đơn</th>
                <th className='text-center'>Khách hàng</th>
                <th className='text-center'>Nhân viên</th>
                <th className='text-center'>Số sản phẩm</th>
                <th className='text-center'>Số lượng mua</th>
                <th className='text-center'>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-center'>1</td>
                <td>0001</td>
                <td >Tử Thần Thủy</td>
                <td >Vua Mặt Trăng</td>
                <td className='text-center'>3</td>
                <td className='text-center'>5</td>
                <td className='text-center'>
                    <Button variant="primary me-2 my-1" onClick={handleShowSee}>
                        <FaEye/>
                    </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="remove" title="Loại bỏ">
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

      <Modal show={showEdit} onHide={handleCloseEdit} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Kiểm duyệt đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th className='text-center'>#</th>
                        <th className='text-center'>Tên sản phẩm</th>
                        <th className='text-center'>Số lượng</th>
                        <th className='text-center'>Giá</th>
                        <th className='text-center'>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td className='text-center'>2</td>
                        <td className='text-end'>200000</td>
                        <td className='text-end'>400000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td className='text-center'>2</td>
                        <td className='text-end'>200000</td>
                        <td className='text-end'>400000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td className='text-center'>2</td>
                        <td className='text-end'>200000</td>
                        <td className='text-end'>400000</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className='text-center fw-bold'>Tổng thành tiền</td>
                        <td colSpan={3} className='text-end fw-bold'>1.200.000</td>
                    </tr>
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseEdit}>
            Loại bỏ
          </Button>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Hủy bỏ
          </Button>
          <Button variant="success" onClick={handleCloseEdit}>
            Duyệt đơn
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default QuanLyDonHang