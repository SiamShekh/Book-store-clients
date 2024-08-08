import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import NotFound from "../templates/NotFound";
import Product from "../../pages/Product";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";

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