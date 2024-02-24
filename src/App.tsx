import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from './pages/components/Loading';
import Layouts from './pages/layouts/Layouts';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Product = lazy(() => import('./pages/product/Product'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const ProductCreate = lazy(() => import('./pages/product/ProductCreate'));
const ProductUpdate = lazy(() => import('./pages/product/ProductUpdate'));
const Users = lazy(() => import('./pages/user/Users'));
const Orders = lazy(() => import('./pages/order/Orders'));
const OrderDetails = lazy(() => import('./pages/order/OrderDetails'));
const Bars = lazy(() => import('./pages/charts/Bars'));
const Pie = lazy(() => import('./pages/charts/Pie'));
const Line = lazy(() => import('./pages/charts/Line'));


const App = () => {
    return (
        <Layouts>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Navigate to="/admin/dashboard" />} />
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/product" element={<Product />} />
                    <Route path="/admin/product/create" element={<ProductCreate />} />
                    <Route path="/admin/product/edit/:id" element={<ProductUpdate />} />
                    <Route path="/admin/user" element={<Users />} />
                    <Route path="/admin/order" element={<Orders />} />
                    <Route path="/admin/order/:id" element={<OrderDetails />} />

                    <Route path="/admin/chart/bar" element={<Bars />} />
                    <Route path="/admin/chart/pie" element={<Pie />} />
                    <Route path="/admin/chart/line" element={<Line />} />

                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </Layouts>
    );
};

export default App;
