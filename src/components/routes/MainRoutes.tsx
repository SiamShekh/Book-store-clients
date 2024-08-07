import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
]);

export default MainRoutes;