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
import AdminDashboard from "../../pages/admin/Dashboard";
import AdminLayouts from "../layouts/AdminLayouts";
import Userlist from "../../pages/admin/Userlist";
import UserProfileOverview from "../../pages/admin/UserProfileOverview";
import Booklist from "../../pages/admin/Booklist";
import Account from "../../pages/Account";
import OrderManagement from "../../pages/Seller/OrderManagement";
import OrderDetails from "../../pages/Seller/OrderDetails";
import AllOrder from "../../pages/admin/AllOrder";

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
            {
                path: 'account',
                element: <Account />
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
            },
            {
                path: 'order-management',
                element: <OrderManagement />
            },
            {
                path: 'order-details/:id',
                element: <OrderDetails />
            }
        ]
    },

    {
        path: '/admin/',
        errorElement: <NotFound />,
        element: <AdminLayouts />,
        children: [
            {
                index: true,
                element: <AdminDashboard />
            },
            {
                path: 'user',
                element: <Userlist />
            },
            {
                path: 'user/:id',
                element: <UserProfileOverview />
            },
            {
                path: 'book',
                element: <Booklist />
            },
            
            {
                path: 'all-order',
                element: <AllOrder />
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