import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fechAllRecipies } from '../Redux/slice/recipeSlice'
import loadingImg from '../assets/loading.gif'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'



const Landing = () => {

    const { allrecipies, loading, error } = useSelector(state => state.recipereducer)
     console.log(allrecipies,loading,error);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    const recipePerPage = 8
    const totalPage = Math.ceil(allrecipies?.length / recipePerPage)
    const currentPageLastIndex = currentPage * recipePerPage
    const currentPageFirstIndex = currentPageLastIndex - recipePerPage
    const visibleRecipeCard = allrecipies?.slice(currentPageFirstIndex, currentPageLastIndex)

    useEffect(() => {
        dispatch(fechAllRecipies())

    }, [])
    // console.log(allrecipies);

    const handleViewMore = (recipe) => {

        sessionStorage.setItem("recipe", JSON.stringify(recipe))
        navigate('/view')

    }

    const navigateToNextPage = () => {
        if (currentPage != totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const navigateToPreviousPage = () => {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
        }
    }


    return (
        <>
            <Header inLanding={true} />
            {
                loading ?
                    <Loading/>
                    :
                    <>
                        <Row >
                            <h1 className="text-center text-primary mt-5">Recipies</h1>
                            {
                                allrecipies?.length > 0 &&
                                visibleRecipeCard?.map(recipe => (
                                    <Col key={recipe.id} className='mb-4 mt-5  d-flex justify-content-center align-items-center ' sm={12} md={6} lg={3}>
                                        <Card style={{ width: '15rem' }} className='align-items-center shadow '>
                                            <Card.Img variant="top" src={recipe.image} />
                                            <Card.Body>
                                                <Card.Title>{recipe.name}</Card.Title>
                                                <p className='text-primary text-center'>{recipe.cuisine}</p>

                                                <Button className='w-100' onClick={() => handleViewMore(recipe)} variant="primary">View More</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                ))
                            }
                        </Row>
                        <div className="text-center text-2xl font-bold my-30">
                            <span onClick={navigateToPreviousPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
                            <span>{currentPage} of {totalPage}</span>
                            <span onClick={navigateToNextPage} className='cursor-pointer '><i className="fa-solid fa-forward ms-5"></i></span>

                        </div>
                    </>


            }

        </>
    )
}

export default Landing