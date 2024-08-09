import { FaMinus, FaPlus } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

const Cart_item = () => {
    return (
        <div>
            <div className="p-5 border-black border-t border-l border-r-4 border-b-4 my-4">
                <div className="flex justify-between items-center flex-col lg:flex-row lg:gap-0 gap-5">
                    <div className="flex-1 flex justify-between w-full items-center gap-3">
                        <input type="checkbox" className="checkbox outline-none" />
                        <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Akkharpatra_Practical_Ucchotor_Gonit_1st-Akkharpatra_Prokasoni-474ba-424345.jpg" alt="book" className="h-24 w-16 " />
                        <div className="">
                            <p className="font-poppins line-clamp-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <p className="font-poppins text-xs">The end publication</p>
                            <MdAutoDelete className="text-xl mt-5" />
                        </div>

                    </div>
                    <div className="flex-1 flex justify-between items-center gap-5">
                        <div className="flex bg-gray-200 border border-black justify-center items-center gap-1 ml-5">
                            <FaMinus className="text-xl  m-2 " />
                            <input type="text" value={'1'} className="w-10 text-center outline-none" />
                            <FaPlus className="text-xl  m-2 " />
                        </div>

                        <p className="font-poppins text-xl font-bold">200 TK.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart_item;