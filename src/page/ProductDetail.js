import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'
import { useParams, useSearchParams } from 'react-router-dom'

const ProductDetail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState(null)
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/swsr2/react_project3/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log("detail-data??", data)
        setProduct(data)
    }
    useEffect(() => {
        getProductDetail()
    }, [])
    return (
        <Container>
            <Row>
                <Col className='detail-img'>
                    <img src={product?.img} alt='' />
                </Col>
                <Col>
                    <h1>{product?.title}</h1>
                    <h2>{product?.price}</h2>
                    <div>{product?.new === true ? "신상품" : ""}</div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                사이즈 선택
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="d-grid gap-2">
                        <Button variant="dark" size="lg">
                            장바구니에 담기
                        </Button>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail
