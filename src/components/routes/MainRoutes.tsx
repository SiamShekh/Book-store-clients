import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import NotFound from "../templates/NotFound";
import Product from "../../pages/Product";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";
import Carts from "../../pages/Carts";
import AddProducts from "../../pages/Seller/AddProducts";
import SellerLayouts from "../layouts/SellerLayouts";
import ProductManagement from "../../pages/Seller/ProductManagement";
import ProductDetails from "../../pages/ProductDetails";
import Dashboard from "../../pages/Seller/Dashboard";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'cart',
                element: <Carts />
            },
            {
                path: 'product-details/:id',
                element: <ProductDetails />
            },
        ]
    },
    {
        path: '/seller/',
        errorElement: <NotFound />,
        element: <SellerLayouts />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'add-product',
                element: <AddProducts />
            },
            {
                path: 'product-management',
                element: <ProductManagement />
            }
        ]
    },
    {
        path: 'sign-up',
        element: <SignUp />
    },

    {
        path: 'sign-in',
        element: <SignIn />
    },
]);

export default MainRoutes;