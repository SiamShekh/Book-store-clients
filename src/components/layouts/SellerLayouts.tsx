import { Outlet } from "react-router-dom";
import SellerNavbar from "../ui/SellerNavbar";

const SellerLayouts = () => {

    return (
        <div data-theme="light" className={`relative `}>
            
            <div className="fixed w-full z-30">
                <SellerNavbar />
            </div>

            <div className="max-w-5xl mx-auto min-h-screen pt-[20vh] p-5">
                <Outlet />
            </div>
        </div>
    );
};

export default SellerLayouts;