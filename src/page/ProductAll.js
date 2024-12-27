import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get('q') || "";
        console.log("검색어:", searchQuery);
        let url = `https://my-json-server.typicode.com/swsr2/react_project3/products?q=${searchQuery}`;

        try {
            let response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch products');

            let data = await response.json();
            setProductList(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    useEffect(() => {
        getProducts()
    }, [query])
    return (
        <div>
            <Container>
                <Row>
                    {productList.map(menu => <Col lg={3} key={menu.id}> <ProductCard item={menu} /></Col>)}

                </Row>
            </Container>
        </div>
    )
}

export default ProductAll
