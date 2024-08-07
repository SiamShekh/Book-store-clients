import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import SideBar from "../ui/SideBar";
import { useSelector } from "react-redux";
import { AppRoot } from "../../redux/store/ReduxStore";

const MainLayouts = () => {
    const toggle = useSelector((state: AppRoot) => state.NavbarToggle.open);

    return (
        <div data-theme="light" className={`relative ${toggle && 'max-h-screen overflow-hidden'}`}>
            {
                toggle &&
                <div className="absolute z-50">
                    <SideBar />
                </div>
            }
            <div className="fixed w-full z-30">
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