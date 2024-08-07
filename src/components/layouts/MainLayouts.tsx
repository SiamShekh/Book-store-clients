import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const MainLayouts = () => {
    return (
        <div data-theme="halloween" className="relative">
            <div className="fixed w-full ">
                <Navbar />
            </div>
            <div className="max-w-5xl mx-auto min-h-screen pt-[20vh] p-5">
                <Outlet />
            </div>

            <div className="bg-black">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayouts;