import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = ({ authenticate }) => {
    return authenticate ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute
