import React from 'react'
import { Container,Col,Row } from 'reactstrap'
import './common-section.css'
const CommonSection = ({title}) => {
    return (
       <section className='common_section'>
    <Container>
        <Row>
            <Col lg='12' >
                <h1>{title}</h1>
            </Col>
        </Row>
    </Container>
       </section>
    )
}

export default CommonSection
