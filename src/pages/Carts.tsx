import Cart_item from "../components/templates/cart/cart_item";

const Carts = () => {
    return (
        <div className="flex justify-between flex-col-reverse md:flex-row">
            <div className="flex-[2]">
                <div className="flex md:items-center justify-between border-b pb-5 md:flex-row flex-col">
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="checkbox outline-none" />
                        <p className="font-poppins capitalize text-black">select all (6 items)</p>
                    </div>
                    <p className="text-black font-poppins capitalize">your total: <span className="line-through text-red-500">2,670 TK.</span> <span className="text-green-600">3,458 TK.</span></p>
                </div>

                <div className="">
                    <Cart_item />
                    <Cart_item />
                    <Cart_item />
                    <Cart_item />
                    <Cart_item />
                </div>

            </div>
            <div className="flex-1 p-5">
                <div className="border-black border-t border-l border-b-4 border-r-4 p-5">
                    <p className="font-poppins text-black border-b pb-5 border-black">Checkout Summary</p>
                    <p className="font-poppins text-black border-b border-dashed py-2 flex justify-between border-black">Subtotal <span>2459 TK.</span></p>
                    <p className="font-poppins text-black border-b border-dashed py-2 flex justify-between border-black">Shiping <span>2459 TK.</span></p>
                    <p className="font-poppins text-black border-b border-dashed py-2 flex justify-between border-black">Total <span>2459 TK.</span></p>
                    <p className="font-poppins text-black border-b border-dashed py-2 flex justify-between border-black">Payable Total
                    <span>2459 TK.</span></p>
                </div>

                <button className="font-poppins text-black mx-auto py-2 px-10 mt-10 hover:bg-black hover:text-white flex justify-between border-black border-t border-l border-b-4 border-r-4">Checkouts</button>
            </div>
        </div>
    );
};

export default Carts;