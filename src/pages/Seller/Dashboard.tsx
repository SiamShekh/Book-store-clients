import { CiShoppingCart } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
import { TbFilterCancel } from "react-icons/tb";
import Recently_sold_product_item from "../../components/templates/home/recently_sold_product_item";

const Dashboard = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <CiShoppingCart className="text-6xl bg-yellow-500 p-2 rounded-2xl" />
                    <p className="text-3xl font-poppins text-black font-bold">28</p>
                    <p className="uppercase font-poppins text-black font-bold text-2xl">product</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <IoIosCheckmarkCircleOutline className="text-6xl bg-green-500 p-2 rounded-2xl" />
                    <p className="text-3xl font-poppins text-black font-bold">2</p>
                    <p className="uppercase font-poppins text-black font-bold text-2xl">sold</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <FaBookOpen className="text-6xl bg-red-500 p-2 rounded-2xl" />
                    <p className="text-3xl font-poppins text-black font-bold">8</p>
                    <p className="uppercase font-poppins text-black font-bold text-2xl">progress</p>
                </div>

                <div className="border border-black border-b-4 border-r-4 p-5 flex flex-col gap-3">
                    <TbFilterCancel className="text-6xl bg-amber-500 p-2 rounded-2xl" />
                    <p className="text-3xl font-poppins text-black font-bold">12</p>
                    <p className="uppercase font-poppins text-black font-bold text-2xl">cancel</p>
                </div>
            </div>

            <p className="font-poppins capitalize text-xl mt-5 font-bold">all product (23)</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 mt-5">
                <Recently_sold_product_item />
                <Recently_sold_product_item />
                <Recently_sold_product_item />
                <Recently_sold_product_item />
                <Recently_sold_product_item />
                <Recently_sold_product_item />
                <Recently_sold_product_item />
            </div>
        </div>
    );
};

export default Dashboard;