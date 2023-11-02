import React from "react";
import { Button, Form, Nav } from "react-bootstrap";
import "./DangNhap.scss";
import { Link } from "react-router-dom";

const DangNhap = () => {
  return (
    <div className="warp-signin mt-5 pt-5">
      <Form className="w-100 form-signin rounded-3 p-3">
        <Nav
          variant="pills"
          defaultActiveKey="/signin"
          className="justify-content-between border-bottom pb-2"
        >
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/signin"
              href="/signin"
              className="text-uppercase fw-bold"
            >
              Đăng nhập
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/signup"
              href="/signup"
              eventKey="/signup"
              className="text-uppercase fw-bold"
            >
              Đăng ký
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <h1 className="text-uppercase text-warning fw-bold p-3">
          Đăng nhập
        </h1>
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            type="password"
            aria-describedby="passwordHelpBlock"
            className="border-2"
          />
        </Form.Group>
        <Button variant="primary" className="px-5 my-3 fw-bold">
          Đăng nhập
        </Button>
        <p className="text-light my-2">OR</p>
        <Button variant="danger" className="px-5 me-1 my-1 fw-bold">
          Google
        </Button>
        <Button variant="info" className="px-5 ms-1 my-1 fw-bold">
          Facebook
        </Button>
      </Form>
    </div>
  );
};

export default DangNhap;
