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
                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <FaRegUser className="text-6xl bg-yellow-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-4xl">2090</p>
                    <p className="font-poppins text-black text-4xl uppercase">user</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <GrUserPolice className="text-6xl bg-purple-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-4xl">2090</p>
                    <p className="font-poppins text-black text-4xl uppercase">seller</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <FaCartShopping className="text-6xl bg-slate-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-4xl">30</p>
                    <p className="font-poppins text-black text-4xl uppercase">product</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <BsCartFill className="text-6xl bg-rose-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-4xl">9</p>
                    <p className="font-poppins text-black text-4xl uppercase line-clamp-1">active-p</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <IoPauseOutline className="text-6xl bg-emerald-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-4xl">20</p>
                    <p className="font-poppins text-black text-4xl uppercase">pause-p</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <IoMdCash className="text-6xl bg-purple-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-4xl line-clamp-1">2090 (45)</p>
                    <p className="font-poppins text-black text-4xl uppercase">sold</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <GiProgression className="text-6xl bg-violet-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-4xl">700 (5)</p>
                    <p className="font-poppins text-black text-4xl uppercase">progress</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <FcCancel className="text-6xl bg-lime-500 p-2 rounded-2xl"/>
                    <p className="font-poppins text-black font-bold text-4xl">1700 (7)</p>
                    <p className="font-poppins text-black text-4xl uppercase">cancel</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;