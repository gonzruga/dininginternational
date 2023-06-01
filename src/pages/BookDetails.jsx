import React from 'react'
import '../styles/book-details.css'
import { Container,Row,Col,ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import bookData from '../assets/data/books'
import Booking from '../components/Booking/Booking'
const BookDetails = () => {
    const {id} = useParams()
const book = bookData.find(book => book.id === id)
const {photo,title,address,desc,city,distance,maxGroupSize} = book
    return (
       <section>
        <Container>
            <Row>
                <Col lg='8'>
                    <div className="book_content">
                        <img src={photo} alt="" />
                        <div className="book_info">
                            <h2>{title}</h2>
                            <div className="d-flex align-items-center">
                                <span className="d-flex align-items-center gap-1">
                                    <i className="ri-map-pin-fill"></i> {address}
                                </span>
                            </div>
                            <div className="tour_extra-details">
                                <span><i className='ri-map-2-line'></i>{city}</span>
                                <span><i className='ri-map-pin-time-line'></i>{distance} k/m</span>
                                <span><i className='ri-group-line'></i>{maxGroupSize}</span>
                               
                               
                            </div>
                            <h5>Description</h5>
                            <p>{desc}</p>
                        </div>
                    </div>
                </Col>
                <Col lg='4' >
                <Booking book={book} />
                </Col>
            </Row>
        </Container>
       </section>
    )
}

export default BookDetails
