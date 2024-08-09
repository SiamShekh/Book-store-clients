import bg_image from "../assets/images/sign up/kids_reading_book_animated.webp";
import logo from "../assets/icons/icon.png";
import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";


const SignUp = () => {
    return (
        <div data-theme="light" className="h-screen w-full relative flex justify-between items-center">
            <div className="flex-[2] hidden md:block">
                <img src={bg_image} alt="background image" className="object-cover h-screen" draggable={false} />
            </div>
            <div className="bg-white flex-1 flex justify-center items-center flex-col gap-3 ">
                <img src={logo} alt="" />
                <h3 className="capitalize font-teko text-3xl mt-10">Create an account</h3>

                <div className="flex items-center w-72 lg:w-80 px-10 py-2 border-black border-t border-l border-b-4 border-r-4 capitalize font-genos font-bold cursor-pointer hover:bg-black hover:text-white justify-center gap-3">
                    <FaGoogle className="size-6" />
                    <p>continue with google</p>
                </div>

                <div className="flex items-center w-72 lg:w-80 px-10 py-2 border-black border-t border-l border-b-4 border-r-4 capitalize font-genos font-bold cursor-pointer hover:bg-black hover:text-white justify-center gap-3">
                    <FaApple className="size-6" />
                    <p>continue with apple</p>
                </div>

                <div className="flex items-center w-72 lg:w-80 px-10 py-2 border-black border-t border-l border-b-4 border-r-4 capitalize font-genos font-bold cursor-pointer hover:bg-black hover:text-white justify-center gap-3">
                    <FaGithub className="size-6" />
                    <p>continue with github</p>
                </div>

                <p className="w-80 text-center font-poppins text-black text-opacity-60">
                    By continuing, you agree to Freepik Company’s <a href="/#">Terms of Use</a> and <a href="/#">Privacy Policy</a>.
                </p>

                <p className="w-80 text-center font-poppins font-bold text-black">
                Already have an account? <a href="/sign-in" className="text-blue-600">Log in</a>
                </p>

            </div>
        </div>
    );
};

export default SignUp;