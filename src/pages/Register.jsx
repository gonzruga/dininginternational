import React, {useState} from 'react'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import user from '../assets/images/user.png'
import registerImg from '../assets/images/register.png'
const Register = () => {

    const [credientials, setCredientials] = useState({
        username:undefined,
        email:undefined,
       password:undefined

    })
    
    const handleClick = e =>{
        e.preventDefault();
        
    }

    const handleChange = e =>{
        setCredientials(prev =>({...prev, [e.target.id]:e.target.value}) )
    } 
    return (
       <section>
        <Container>
            <Row>
            <Col lg='8' className='m-auto'>
            <div className="login_container
             d-flex justify-content-between">

                <div className="login_img">
                    <img src={registerImg} alt="" />
                </div>
                <div className="login_form">
                    <div className="user">
                        <img src={user} alt="" />
                    </div>
                    <h2>Register</h2>
                    <Form onSubmit={handleClick}>
                    <FormGroup>
                            <input type="text"
                             placeholder='Username'
                             id='username' onChange={handleChange}
                              />
                        </FormGroup>
                        <FormGroup>
                            <input type="email"
                             placeholder='email'
                             id='email' onChange={handleChange}
                              />
                        </FormGroup>
                        <FormGroup>
                            <input type="password"
                             placeholder='password'
                             id='password' onChange={handleChange}
                              />
                        </FormGroup>
                        <Button type='submit' className='btn primary__btn auth_btn'>
                       Create Account
                        </Button>
                    </Form>
                    <p>Already have an account <Link to={'/login'}>Login</Link> </p>
                </div>
            </div>
            </Col>
            </Row>
        </Container>
       </section>
    )
}

export default Register
