
const Product_item = () => {
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
                            <div className="flex gap-2 md:items-center mt-5 md:flex-row flex-col">
                                <div className="border border-red-600 border-b-4 border-r-4 px-5 py-1 text-black hover:bg-red-600 hover:text-black">
                                    Delete
                                </div>

                                <div className="border border-green-600 border-b-4 border-r-4 px-5 py-1 text-black hover:bg-green-600 hover:text-black">
                                    Pause Selling
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex-1 flex justify-end items-end gap-5">
                        <p className="font-poppins text-xl font-bold">200 TK.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product_item;