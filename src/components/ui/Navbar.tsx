import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Toggle } from "../../redux/slice/NavbarToggle";

const Navbar = () => {
    const dispatch = useDispatch();

    const NavBarLink = <>
        <NavLink to={"/"} className={({ isActive }) => `${isActive && 'text-white'} mr-5`}>Home</NavLink>
        <NavLink to={"/category"} className={({ isActive }) => `${isActive && 'text-white'} mr-5`}>Category</NavLink>
        <NavLink to={"/contact"} className={({ isActive }) => `${isActive && 'text-white'} mr-5`}>Contact</NavLink>
        <NavLink to={"/about"} className={({ isActive }) => `${isActive && 'text-white'} mr-5`}>About</NavLink>
        <NavLink to={"/sign-up"} className={({ isActive }) => `${isActive && 'text-white'} mr-5`}>Sign Up</NavLink>
    </>

    return (
        <div className={`max-w-5xl bg-black bg-opacity-40 rounded-full m-3 lg:mx-auto backdrop-blur-3xl`}>
            <div className="navbar font-poppins">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" onClick={() => dispatch(Toggle(true))} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 border-white border p-2 shadow">
                            {NavBarLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">bookStore</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavBarLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'} className="px-7 rounded-full hover:bg-white hover:text-black py-2 border hidden md:block border-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;