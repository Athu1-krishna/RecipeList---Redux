import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div style={{ height: '300px', backgroundColor:"#DCDCDC",color:'#333' }} className='  mt-5 w-100'>
            <div className="d-flex justify-content-between container pt-5">
                <div style={{ width: "400px" }} className="intro">
                    <Link style={{ textDecoration: "none", color: "#333", fontWeight: "600" }} to={'/'}>
                        <img src={logo} style={{width:'150px'}} alt="" />
                    </Link>
                    <p className='mt-3 '>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                    <p className=''>Code licensed MIT, docs CC BY 3.0.</p>
                    <p className=''>Currently v5.3.3.</p>
                </div>
                <div>
                    <h2 className="" style={{ fontWeight: "600", fontSize: "20px" }}>Links</h2>
                    <Link style={{ textDecoration: "none", color: "#333", }} to={'/'}>
                        Landing Page
                    </Link>
                </div>
                <div>
                    <h2 className="" style={{ fontWeight: "600", fontSize: "20px" }}>Guides</h2>
                    <Link style={{ textDecoration: "none", color: "#333", }} to={''}>
                        React
                    </Link> <br />
                    <Link style={{ textDecoration: "none", color: "#333", }} to={''}>
                        React Bootstrap
                    </Link><br />
                    <Link style={{ textDecoration: "none", color: "#333", }} to={''}>
                        React Router
                    </Link>
                </div>
                <div className="contact">
                    <h2 className="" style={{ fontWeight: "600", fontSize: "20px" }}>Contact Us</h2>
                    <input type="text" style={{border:'none', outline:'none'}} placeholder='Enter your email here' className='rounded h-25  text-center' />
                    <button className='btn btn-info ms-1 h-25'><i className="fa-solid fa-arrow-right  " ></i>
                    </button>
                    <br />
                    <div className='d-flex  justify-content-evenly mt-3 '>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-solid fa-phone"></i>
                    </div>

                </div>
            </div>
            <p style={{ backgroundColor: '#DCDCDC', color: '#333' }} className='text-center py-3 '>&#169; <span className='fw-bold'>Athul Krishna</span>  , Recipe Website. Build with React & Redux. </p>
        </div>
    )
}

export default Footer