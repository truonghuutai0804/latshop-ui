import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import image1 from '../../../../assets/images/slide1.jpg'
const ChiTietSanPham = () => {
  return (
    <>
        <Row className='mt-5 pt-5'>
            <Col><img src={image1} alt="image1" className='d-block w-100'/></Col>
            <Col>
                <h2 className='fw-bold'>Laptop Lenovo Legion 5 15IAH7-82RC0036VN</h2>
                <p>Thương hiệu: Lenovo</p>
                <h3 className='text-end text-danger fw-bold'>28.990.000₫</h3>
                <p className='text-end' style={{textDecoration: 'line-through'}}>38.990.000₫</p>
                
                <div className='d-block text-center'>
                    <Button className="bg-warning border-0 py-3 my-2 w-100 fw-bold">Thêm vào giỏ hàng</Button>
                    <br/>
                    <Button className="bg-danger border-0 py-3 my-2 w-100 fw-bold">Thanh toán ngay</Button>
                </div>
            </Col>
        </Row>

        <Row>
            <Col xs={12} md={8}>
                <div className='my-3 p-3 border border-2 rounded-2'>
                    <h3 className='fw-bold text-uppercase text-center'>Thông số kỹ thuật</h3>
                    <Row>
                        <Col>
                            <ul>
                                <li><b>CPU:</b> Intel Core i7-12700H</li>
                                <li><b>Màn hình:</b> 15.6" IPS (1920 x 1080),165Hz</li>
                                <li><b>RAM:</b> 1 x 8GB DDR5 4800MHz</li>
                                <li><b>Đồ họa:</b> RTX 3050Ti 4GB GDDR6 / Intel Iris Xe Graphics</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li><b>Lưu trữ:</b> 512GB SSD M.2 NVMe</li>
                                <li><b>Hệ điều hành:</b> Windows 11 Home</li>
                                <li><b>Pin:</b> 4 cell 80 Wh Pin liền</li>
                                <li><b>Khối lượng:</b> 2.3kg</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xs={12} md={4}>
                <div className='my-3 p-3 border border-2 rounded-2'>
                    <h3 className='fw-bold text-center text-uppercase'>Chính sách bán hàng</h3>
                    <p>Miễn phí giao hàng cho đơn hàng từ 5 triệu</p>
                    <p>Cam kết hàng chính hãng 100% </p>
                    <p>Đổi trả trong vòng 10 ngày </p>
                </div>
            </Col>
        </Row>
        

        <div className='my-3 p-3 border border-2 rounded-2'>
            <h3 className='fw-bold text-center text-uppercase'>Mô tả sản phẩm</h3>
            <p>Laptop Lenovo Legion 5 15IAH7 82RC0036VN là dòng laptop Gaming cao cấp với thiết kế độc đáo và ấn tượng đến từ nhà Lenovo. Sở hữu cấu hình khủng với hiệu năng điện toán mạnh mẽ nhờ bộ vi xử lý Intel Core i7 Gen 12 mới mẻ, có thể cân được mọi tựa game đình đám hiện nay cũng như sẵn sàng hỗ trợ cho người dùng xử lý mọi tác vụ đồ họa, thiết kế, văn phòng dễ dàng hơn.</p>  
            <p>Thiết kế tông xám rất tinh tế, kích thước tiêu chuẩn: Laptop Lenovo Legion 5 sở hữu thiết kế màu xám tinh tế trending đậm chất gaming, toát lên vẻ trẻ trung và lịch lãm cho người sử dụng, rất phù hợp với sở thích của nhiều người dùng hiện nay.</p>    
            <p>Máy tính xách tay Lenovo Legion 5 sở hữu kích thước tiêu chuẩn với khối lượng 2.3kg cùng kích thước 3 chiều với thông số 35.88 x 26.235 x 1.999cm, bạn có thể dễ dàng cất vào balo của mình và di chuyển đến mọi nơi mà cần sử dụng, dù là các cuộc hội thảo ở công ty hay các chuyến công tác dài.</p>  
        </div>


    </>
  )
}

export default ChiTietSanPham