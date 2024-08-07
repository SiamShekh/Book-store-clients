import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import MainLayouts from "../layouts/MainLayouts";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]);

export default MainRoutes;