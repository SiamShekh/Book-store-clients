const OrderDetails = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-3">
                <div className="border border-black border-b-8 border-r-8 p-5 h-fit md:h-full">
                    <p className="font-poppins text-2xl font-bold text-black">Book: Cooking the book</p>
                    <p className="font-poppins text-xl text-black">By: Lambart Genos</p>
                    <p className="font-poppins text-xl text-black">Price: 85 TK.</p>
                    <p className="font-poppins text-xl text-black">Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi tempore reprehenderit ad similique minus a eos numquam architecto odio quas. Debitis ratione iste eius enim! Dolores recusandae autem nulla nostrum reiciendis officia omnis ea, voluptate corrupti delectus quo assumenda consectetur. Nisi repellat sit modi dolor fugit quasi, voluptatibus molestias cumque!</p>
                </div>
                <div className="border border-black border-b-8 border-l-8 p-5 h-fit md:h-full">
                    <p className="font-poppins text-2xl font-bold text-black">Name: Kuta Lobart</p>
                    <p className="font-poppins text-xl text-black">Total Book: 78</p>
                    <p className="font-poppins text-xl text-black">Total Sold: 85 TK. (98)</p>
                    <p className="font-poppins text-xl text-black">Total Pending: 90 TK. (10)</p>
                </div>

                <div className="border border-black border-t-8 border-r-8 p-5 h-fit md:h-full">
                    <p className="font-poppins text-2xl font-bold text-black">Buyer Name: Siam Shekih</p>
                    <p className="font-poppins text-xl text-black">Total Spend: 80 TK (1)</p>
                    <p className="font-poppins text-xl text-black">Member Since: 7-10-2024</p>
                    <p className="font-poppins text-xl text-black">Payment Method: Cash on Delivery</p>
                </div>

                <div className="border border-black border-t-8 border-l-8 p-5 h-fit md:h-full">
                    <p className="font-poppins text-2xl font-bold text-black">Order Info:</p>
                    <p className="font-poppins text-xl text-black">Book Name: Lorem ipsum dolor sit amet.</p>
                    <p className="font-poppins text-xl text-black">Price: 85 TK.</p>
                    <p className="font-poppins text-xl text-black">Delivery Address: Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;