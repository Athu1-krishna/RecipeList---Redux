import React from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../Redux/slice/recipeSlice'
import logo from '../assets/logo.png'

const Header = ({ inLanding }) => {

    const userRecipe = useSelector(state => state.recipereducer)
    const dispatch = useDispatch()



    return (
        <>
            <Navbar className="shadow" style={{ backgroundColor:'#E0FFFF'}}>
                <Container>
                    <Navbar.Brand >
                        <Link to={'/'} className='text-white  fw-bolder' style={{ textDecoration: "none", fontSize: "35px" }}>
                           <img style={{width:'150px'}} src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    {
                        inLanding &&

                        <Form className="d-flex">
                            <Form.Control
                                style={{ width: "300px" }}
                                type="search"
                                placeholder="Search by cuisine"
                                className="me-5 rounded"
                                aria-label="Search by cuisine"
                                onChange={e => dispatch(searchRecipe(e.target.value.toLowerCase()))}
                            />
                        </Form>
                    }

                </Container>
            </Navbar>
        </>
    )
}

export default Header