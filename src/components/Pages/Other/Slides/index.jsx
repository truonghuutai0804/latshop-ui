import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide1 from '../../../../assets/images/slide1.jpg'
import slide2 from '../../../../assets/images/slide2.jpg'
import slide3 from '../../../../assets/images/slide3.jpg'

const Slides = () => {
  return (
    <>
        <Carousel data-bs-theme="dark"  >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                    style={{ minHeight: '300px', maxHeight: '450px' }}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    style={{ minHeight: '300px', maxHeight: '450px' }}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    style={{ minHeight: '300px', maxHeight: '450px' }}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Slides