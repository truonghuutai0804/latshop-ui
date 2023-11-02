import React, { useState } from "react";
import product from "../../../../assets/images/slide1.jpg";
import "./GioHang.scss";
import { Button, Form, Modal } from "react-bootstrap";
const GioHang = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedPrices, setSelectedPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [options, setOptions] = useState([
    { value: 1, price: 2900000 },
    { value: 2, price: 1900000 },
    { value: 3, price: 3900000 },
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedSize, setSelectedSize] = useState(""); // Sử dụng state để theo dõi size được chọn

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Cập nhật state khi kích cỡ được chọn
  };

  const handleDeleteItem = (value) => {
    const updatedOptions = options.filter((item) => item.value !== value);
    setOptions(updatedOptions);
    if(options.length - 1 === 0) {
      setSelectAll(false);
      setSelectedPrice(0)
    }
  };

  if (options.length === 1 && selectAll !== true ) {
    setSelectAll(true);
    setSelectedOptions([options[0].value]);
    setSelectedPrice(options[0].price);
  } 

  

  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    if (selectAll) {
      setSelectedOptions([]);
      setSelectedPrice(0);
    } else {
      // Chọn tất cả tùy chọn
      const allValues = options.map((option) => option.value);
      const allPrices = options.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
      setSelectedOptions(allValues);
      setSelectedPrice(allPrices);
    }
  };

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option.value)) {
      setSelectedOptions(
        selectedOptions.filter((item) => item !== option.value)
      );
      setSelectedPrice(selectedPrices - option.price);
      setSelectAll(false);
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
      setSelectedPrice(selectedPrices + option.price);
      if (options.length - 1 === selectedOptions.length) setSelectAll(true);
    }
  };

  console.log(selectedOptions.length);

  return (
    <>
      <h1 className="text-uppercase my-5 pt-5 text-center fw-bold">
        Giỏ hàng của bạn
      </h1>
      <Form.Check
        type="checkbox"
        label="Chọn tất cả"
        className="ms-4"
        checked={selectAll}
        onChange={handleSelectAll}
      />
      <div className="warp-cart">
        <div className="warp-main-cart">
          <div className="main-cart">
            {options.length !== 0 ? (
              <>
                {options.map((option, idx) => (
                  <div className="body-cart my-2" key={idx}>
                    <div className="box-cart">
                      <Form.Check
                        type="checkbox"
                        className="select-cart"
                        checked={selectedOptions.includes(option.value)}
                        onChange={() => handleOptionChange(option)}
                      />
                      <div className="hinhanh">
                        <img
                          src={product}
                          alt="hinh anh"
                          width={140}
                          height={190}
                        />
                      </div>
                      <div className="thongtin ps-3">
                        <p>
                          <b>
                            MLB - Quần jogger unisex lưng thun Cube Monogram Big
                            Lux
                          </b>
                        </p>
                        <p>50CRS / L / 3APTM0834</p>
                        <p>Số lượng: 1 </p>
                        <p>{option.price}₫</p>
                      </div>
                    </div>
                    <div className="action-cart">
                      <Button
                        className="button-change btn-light"
                        onClick={handleShow}
                      >
                        Thay đổi tùy chọn
                      </Button>
                      <Button
                        className="button-delete btn-light"
                        onClick={() => handleDeleteItem(option.value)}
                      >
                        Xóa
                      </Button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center">Không có sản phẩm nào</div>
            )}
          </div>
          <div className="buy-continue">
            <Button className="py-3 px-5 my-4 btn-light border border-2 border-dark fw-bold">
              Tiếp tục mua hàng
            </Button>
          </div>
        </div>
        <div className="sidebar-cart">
          <div className="warp-sideber-cart">
            <h4>Thông tin đơn hàng</h4>
            <ul>
              <li>
                <label>Tạm tính</label>
                <span>{selectedPrices}₫</span>
              </li>
              <li>
                <label>Phí vận chuyển</label>
                <span>...</span>
              </li>
            </ul>
            <div className="total-price-cart mt-3 pt-3">
              <label>Tổng đơn hàng</label>
              <span>{selectedPrices}₫</span>
            </div>
          </div>
          {options.length !== 0 && selectedOptions.length !==0 ? (
            <Button className="button-cart btn-dark">Thành toán</Button>
          ) : (
            <Button className="button-cart btn-dark" disabled>Thành toán</Button>
          )}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton />
        <Modal.Body className="d-flex">
          <div className="hinhanh-modal">
            <img src={product} alt="hinh anh" width={314} height={388} />
          </div>
          <div className="content-model ms-3">
            <h2>MLB - Áo thun unisex cổ tròn tay ngắn Classic Monogram</h2>
            <img src={product} alt="hinh anh" width={62} height={77} />
            <img src={product} alt="hinh anh" width={62} height={77} />
            <img src={product} alt="hinh anh" width={62} height={77} />
            <div className="warp-size">
              <Button
                variant={selectedSize === "L" ? "dark" : "light"}
                className="size"
                onClick={() => handleSizeClick("L")}
              >
                L
              </Button>
              <Button
                variant={selectedSize === "M" ? "dark" : "light"}
                className="size"
                onClick={() => handleSizeClick("M")}
              >
                M
              </Button>
              <Button
                variant={selectedSize === "S" ? "dark" : "light"}
                className="size"
                onClick={() => handleSizeClick("S")}
              >
                S
              </Button>
              <Button
                variant={selectedSize === "XL" ? "dark" : "light"}
                className="size"
                onClick={() => handleSizeClick("XL")}
              >
                XL
              </Button>
              <Button
                variant={selectedSize === "XS" ? "dark" : "light"}
                className="size"
                onClick={() => handleSizeClick("XS")}
              >
                XS
              </Button>
            </div>
            <div className="soluong">
              <Button
                variant="light border"
                onClick={() => count > 1 && setCount(count - 1)}
              >
                -
              </Button>
              <Form.Control
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="text-center"
              />
              <Button
                variant="dark"
                onClick={() => setCount(parseInt(count) + 1)}
              >
                +
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GioHang;
