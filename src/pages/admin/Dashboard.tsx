import { FaRegUser } from "react-icons/fa";
import { GrUserPolice } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { IoPauseOutline } from "react-icons/io5";
import { IoMdCash } from "react-icons/io";
import { FcCancel } from "react-icons/fc";
import { GiProgression } from "react-icons/gi";

const Dashboard = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-3">
                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col">
                    <FaRegUser className="text-6xl bg-yellow-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-2xl">2090</p>
                    <p className="font-poppins text-black text-1xl font-bold uppercase">user</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col">
                    <GrUserPolice className="text-6xl bg-purple-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-2xl">2090</p>
                    <p className="font-poppins text-black text-1xl font-bold uppercase">seller</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col">
                    <FaCartShopping className="text-6xl bg-slate-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-2xl">30</p>
                    <p className="font-poppins text-black text-1xl font-bold uppercase">product</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col">
                    <BsCartFill className="text-6xl bg-rose-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-2xl">9</p>
                    <p className="font-poppins text-black text-1xl font-bold uppercase line-clamp-1">active product</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col">
                    <IoPauseOutline className="text-6xl bg-emerald-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-2xl">20</p>
                    <p className="font-poppins text-black text-1xl font-bold uppercase">pause product</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col">
                    <IoMdCash className="text-6xl bg-purple-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-2xl line-clamp-1">2090 TK. (7)</p>
                    <p className="font-poppins text-black text-1xl font-bold uppercase">product sold</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col">
                    <GiProgression className="text-6xl bg-violet-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-2xl">700 TK. (45)</p>
                    <p className="font-poppins text-black text-1xl font-bold uppercase">order progress</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col">
                    <FcCancel className="text-6xl bg-lime-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-2xl">1700 TK. (7)</p>
                    <p className="font-poppins text-black text-1xl font-bold uppercase">order cancel</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;