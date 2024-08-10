const Book = <div className="p-5 border-black border-t border-l border-r-4 border-b-4 my-4">
    <div className="flex justify-between items-center flex-col lg:flex-row lg:gap-0 gap-5">
        <div className="flex-1 flex justify-between w-full items-center gap-3">
            <input type="checkbox" className="checkbox outline-none" />
            <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Akkharpatra_Practical_Ucchotor_Gonit_1st-Akkharpatra_Prokasoni-474ba-424345.jpg" alt="book" className="h-24 w-16 " />
            <div className="">
                <p className="font-poppins line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="font-poppins text-xs">The end publication</p>
            </div>

        </div>
        <div className="flex-1 flex justify-end items-end gap-5">
            <p className="font-poppins text-xl font-bold">200 TK.</p>
        </div>
    </div>
</div>;

const Account = () => {
    return (
        <div>
            <div className="flex items-start gap-3">
                <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" className="w-28 rounded-lg" />
                <div className="">
                    <p className="font-poppins text-black font-bold text-xl">Siam Sheikh</p>
                    <p className="font-poppins capitalize">total order: (78)</p>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-6"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between flex-col-reverse md:flex-row mt-10">
                <div className="flex-[2]">
                    <div className="flex md:items-center justify-between border-b pb-5 md:flex-row flex-col">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" className="checkbox outline-none" />
                            <p className="font-poppins capitalize text-black">select all (6 items)</p>
                        </div>
                    </div>

                    <div className="">
                       {Book}
                       {Book}
                       {Book}
                    </div>

                </div>
                <div className="flex-1 p-5">
                    <div className="border-black border-t border-l border-b-4 border-r-4 p-5">
                        <p className="font-poppins text-black border-b pb-5 border-black">User Summary</p>
                        <p className="font-poppins text-black border-b border-dashed py-2 flex justify-between border-black">Total order <span>2459 TK.</span></p>
                        <p className="font-poppins text-black border-b border-dashed py-2 flex justify-between border-black">Cancel order <span>2459 TK.</span></p>
                        <p className="font-poppins text-black border-b border-dashed py-2 flex justify-between border-black">Processing order <span>2459 TK.</span></p>
                        <p className="font-poppins text-black border-b border-dashed py-2 flex justify-between border-black">Total spend
                            <span>2459 TK.</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Account;