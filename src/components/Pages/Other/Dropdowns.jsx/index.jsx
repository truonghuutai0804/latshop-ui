import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dropdowns = ({ title, children, flag }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
  
    return (
    flag === "true" ?
      <Dropdown
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        show={isOpen}
        drop='end'
      >
        <Dropdown.Toggle as={Link} className="text-light my-3" id="hover-dropdown">
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu >
          {children}
        </Dropdown.Menu>
      </Dropdown>
      :
      <Link className="text-light my-3" to='./products'>{title}</Link>
    );
}

export default Dropdowns