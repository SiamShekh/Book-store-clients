import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import NotFound from "../templates/NotFound";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
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