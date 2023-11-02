import React, { useCallback, useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Dropdowns.scss";

const Dropdowns = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [deviceType, setDeviceType] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 1024) return setDeviceType("mobile");
    return setDeviceType("desktop");
  }, []);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  return (
    <>
      <NavDropdown
        title={props.title}
        className="text-uppercase fw-bold"
        id="navbarScrollingDropdown"
        show={isHovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {deviceType === "desktop" ? (
          <div className="container">
            {props.items.length !== 0 ? (
              props.items.map((item, idx) => (
                <div className="column" key={idx}>
                  <Link className="text-uppercase ms-3 title-dropdown" to="#ao">
                    {item.title}
                  </Link>
                  <NavDropdown.Divider />
                  {item.categoryItems &&
                    item.categoryItems.map((item, idx) => (
                      <NavDropdown.Item as={Link} key={idx} to={item.link}>
                        {item.label}
                      </NavDropdown.Item>
                    ))}
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        ) : props.items.length !== 0 ? (
          props.items.map((item, idx) => (
            <NavDropdown
              title={item.title}
              className="text-uppercase fw-bold title-item-mobile"
              id="navbarScrollingDropdown"
              key={idx}
            >
              {item.categoryItems &&
                item.categoryItems.map((item, idx) => (
                  <NavDropdown.Item as={Link} key={idx} to={item.link}>
                    {item.label}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          ))
        ) : (
          <div></div>
        )}
      </NavDropdown>
    </>
  );
};

export default Dropdowns;
