import { Menu, Sidebar } from "react-pro-sidebar";
import { useDispatch } from "react-redux";
import { Toggle } from "../../redux/slice/NavbarToggle";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <Sidebar
                collapsed={false}
                backgroundColor="#000"
                onBackdropClick={() => dispatch(Toggle(false))}
                className="h-screen"
            >
                <Menu className="relative">
                    <p className="text-4xl text-white absolute top-3 right-3 cursor-pointer" onClick={() => dispatch(Toggle(false))}><IoClose /></p>
                    <div className="pt-20">
                        <p className="font-genos text-4xl text-white text-center">Bookstore</p>
                    </div>
                    <div className="m-5 ">
                        <NavLink to={'/'} className={({ isActive }) => `opacity-50 block font-genos text-2xl text-center ${isActive ? 'text-black px-10 rounded-lg py-1 opacity-100 bg-white' : 'text-white bg-transparent'}`}>Home</NavLink>
                        <NavLink to={'/products'} className={({ isActive }) => `opacity-50 block font-genos text-2xl text-center ${isActive ? 'text-black px-10 rounded-lg py-1 opacity-100 bg-white' : 'bg-transparent text-white'}`}>Product</NavLink>
                        <NavLink to={'/cart'} className={({ isActive }) => `opacity-50 block font-genos text-2xl text-center ${isActive ? 'text-black px-10 rounded-lg py-1 opacity-100 bg-white' : 'bg-transparent text-white'}`}>Cart</NavLink>
                        <NavLink to={'/about'} className={({ isActive }) => `opacity-50 block font-genos text-2xl text-center ${isActive ? 'text-black px-10 rounded-lg py-1 opacity-100 bg-white' : 'bg-transparent text-white'}`}>About</NavLink>

                        <NavLink to={'/account'} className={({ isActive }) => `opacity-50 block font-genos text-2xl text-center ${isActive ? 'text-black px-10 rounded-lg py-1 opacity-100 bg-white' : 'bg-transparent text-white'}`}>Account</NavLink>

                        <NavLink to={'/sign-up'} className={({ isActive }) => `opacity-50 block font-genos text-2xl text-center ${isActive ? 'text-black px-10 rounded-lg py-1 opacity-100 bg-white' : 'bg-transparent text-white'}`}>Signup</NavLink>

                    </div>
                </Menu>
            </Sidebar>;
        </div>
    );
};

export default SideBar;