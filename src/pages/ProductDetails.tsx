import Details_item from "../components/templates/product-details/details_item";

const ProductDetails = () => {
    return (
        <div>
            <div className="flex gap-5 flex-col items-center md:flex-row md:items-start">
                <img src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" alt="book cover" className="w-fit h-96" />

                <div className="">
                    <h1 className="text-black font-poppins text-2xl md:text-4xl line-clamp-2 font-semibold">Programming Zero</h1>
                    <div className="my-10">

                        <p className="font-poppins text-xl md:text-2xl">by <span className="font-semibold">Jubayer Hossian</span></p>
                        <p className="font-poppins text-xl md:text-2xl">Category: <strong>Kids</strong></p>

                        <div className="flex gap-3 items-center text-xl font-poppins text-black">
                            <div className="rating my-5">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>(48)</p>
                        </div>
                    </div>
                    <p className="text-5xl font-bold text-black">250 TK.</p>

                    <div className="border border-black border-b-4 border-r-4 capitalize font-poppins px-5 py-2 text-center mt-5 text-black font-semibold text-xl hover:bg-black hover:text-white">
                        add to cart
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h1 className="font-poppins text-2xl font-bold text-black">Description:</h1>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita facere minus eum iusto obcaecati quas, modi vitae accusantium, architecto provident vel sapiente perspiciatis illo nesciunt consectetur eligendi non. Sequi, reiciendis doloremque quas nihil amet eum, labore sunt itaque eaque quaerat culpa nesciunt beatae quos mollitia. Quae magni esse maiores illum, voluptatem quo non quibusdam perferendis vel, exercitationem fugiat nisi sit repellendus nostrum assumenda harum doloribus. Veritatis autem nobis at explicabo repudiandae odit, ipsam quos placeat animi repellendus iusto eaque perferendis, odio dolorem aut culpa doloribus similique voluptate cupiditate ut? Error odit sed, impedit fuga vitae ducimus aliquam, dolorem repudiandae numquam provident libero delectus aspernatur consequatur nihil nisi culpa quasi dolor, distinctio inventore! Quod ab cum fugiat, libero quibusdam, pariatur aliquam soluta recusandae aspernatur, nulla excepturi? Dicta aperiam deserunt repudiandae optio laborum nisi a qui dolores, placeat mollitia perspiciatis natus voluptate fugiat architecto ipsa pariatur consequuntur veritatis, facilis necessitatibus voluptatibus blanditiis, atque libero veniam. Nulla cupiditate animi temporibus ducimus, vero accusantium quod natus dolorum nobis culpa quisquam beatae! Minus voluptatibus exercitationem, amet possimus dolores tempore quae mollitia, est eius sunt, labore debitis velit vero quas asperiores deserunt odit sit inventore neque accusamus blanditiis animi dolorum laboriosam placeat. Error perferendis inventore mollitia.</p>

            </div>

            <div className="mt-5">
                <h1 className="font-poppins text-2xl text-black font-bold">Review and rating</h1>
                <div className="flex flex-col gap-5 mt-5">
                    <Details_item />
                    <Details_item />
                    <Details_item />
                    <Details_item />
                    <Details_item />
                </div>
            </div>


        </div>
    );
};

export default ProductDetails;