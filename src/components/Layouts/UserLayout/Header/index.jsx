import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import Dropdowns from "./Dropdowns";
const Header = () => {
  const Category = [
    {
      title: "Quần áo",
      group: [
        {
          title: "Áo",
          categoryItems: [
            { label: "Áo thun", link: "#aothun" },
            { label: "Áo polo", link: "#aopolo" },
            { label: "Áo sơ mi", link: "#aosomi" },
            { label: "Áo sát nách", link: "#aosatnach" },
            { label: "Áo bóng chày", link: "#aothun" },
            { label: "Áo len/ sweater", link: "#aosweater" },
            { label: "Áo nỉ/ sweatershirts", link: "#aosweatershirts" },
            { label: "Áo chui đầu/ hoodie", link: "#aohoodie" },
          ],
        },
        {
          title: "Quần",
          categoryItems: [
            { label: "Quần dài", link: "#quandai" },
            { label: "Quần jogger", link: "#quanjogger" },
            { label: "Quần shorts", link: "#quanshorts" },
          ],
        },
        {
          title: "Áo khoác",
          categoryItems: [
            { label: "Áo khoác blazer", link: "#aokhoacblazer" },
            { label: "Áo khoác phao", link: "#aokhoacphao" },
            { label: "Áo khoác lông", link: "#aokhoaclong" },
            { label: "Áo khoác bomber", link: "#aokhoacbomber" },
            { label: "Áo khoác cardigan", link: "#aokhoaccardigan" },
            { label: "Áo khoác phối mũ", link: "aokhoacphoimu" },
            { label: "Áo khoác bóng chày", link: "aokhoacbongchay" },
          ],
        }
      ],
    },
    {
      title: "Mũ nón",
      group: [
        {
          title: "Áo",
          categoryItems: [
            { label: "Áo thun z", link: "#aothun" },
            { label: "Áo polo z", link: "#aopolo" },
            { label: "Áo sơ mi z", link: "#aosomi" },
            { label: "Áo sát nách z", link: "#aosatnach" },
            { label: "Áo bóng chày z", link: "#aothun" },
            { label: "Áo len/ sweater z", link: "#aosweater" },
            { label: "Áo nỉ/ sweatershirts z", link: "#aosweatershirts" },
            { label: "Áo chui đầu/ hoodie z", link: "#aohoodie" },
          ],
        },
        {
          title: "Quần",
          categoryItems: [
            { label: "Quần dài z", link: "#quandai" },
            { label: "Quần jogger z", link: "#quanjogger" },
            { label: "Quần shorts z", link: "#quanshorts" },
          ],
        },
        
      ],
    },
    {
      title: "Giày dép",
      group: [
        {
          title: "Quần",
          categoryItems: [
            { label: "Quần dài", link: "#quandai" },
            { label: "Quần jogger", link: "#quanjogger" },
            { label: "Quần shorts", link: "#quanshorts" },
          ],
        },
      ],
    },
    {
      title: "Túi ví",
      group: [
        {
          title: "Áo",
          categoryItems: [],
        },
        {
          title: "Quần",
          categoryItems: [],
        },
        
      ],
    },
    {
      title: "Phụ kiện",
      group: [],
    },
  ];

  const [searchQuery, setSearchQuery] = useState([]);
  const history = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      history(`/search?p=${searchQuery}`, { replace: true });
      e.target.value = "";
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary warp-header"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="/" className="px-5 py-3">
            lat Việt Nam
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {Category.map((item, idx) => (
                <Dropdowns
                  key={idx}
                  title={item.title}
                  items={item.group}
                ></Dropdowns>
              ))}
            </Nav>

            <Form className="d-flex bg-white rounded-pill mx-5">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-1 rounded-pill border-0"
                aria-label="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <Button
                as={Link}
                to={`/search?p=${searchQuery}`}
                variant="outline-primary rounded-circle border-0"
              >
                <FaSearch />
              </Button>
            </Form>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {true ? (
                <Nav.Link as={Link} to="/signin">
                  Đăng nhập
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/signout">
                  Đăng xuất
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/cart">
                Giỏ hàng
              </Nav.Link>
              <Nav.Link as={Link} to="/signin">
                Ngôn ngữ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
