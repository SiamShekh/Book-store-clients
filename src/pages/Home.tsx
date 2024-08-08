import Best_seller_category_item from "../components/templates/home/best_seller_category_item";
import Recently_sold_product_item from "../components/templates/home/recently_sold_product_item";
import women from "../assets/images/women_reading_book.webp";

const Home = () => {
    return (
        <div>
            <section about="product banner slide" className="md:max-h-screen">
                <div className="flex items-center justify-between flex-col-reverse md:flex-row">
                    <div className="lg:flex-1">
                        <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-black"><span className="block mb-2">Feast your eya on</span><span>a good book!</span></h1>
                        <p className="mt-5 text-xs font-poppins text-black text-opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus error quaerat illum deserunt sed!</p>
                        <a>
                            <button className="px-4 py-1 bg-yellow-600 text-black font-poppins font-semibold border-black border-t border-l border-r-4 mt-5 border-b-4">Start Exploring</button>
                        </a>
                    </div>
                    <img src={women} alt="" className="lg:h-96 md:h-64 lg:flex-1" />
                    
                </div>
            </section>

            <section about="Best Seller category" className="mt-5">
                <div className="flex justify-between items-center">
                    <p className="font-poppins text-xl bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent font-bold">Best Seller Category</p>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 mt-5">
                    <Best_seller_category_item />
                    <Best_seller_category_item />
                    <Best_seller_category_item />
                    <Best_seller_category_item />
                    <Best_seller_category_item />
                </div>
            </section>

            <section about="super store" className="mt-5">
                <div className="flex justify-between items-center">
                    <p className="font-poppins text-xl bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent font-bold">Best Superstore</p>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 mt-5">
                    <div className="bg-gray-300 shadow-xl rounded-xl p-3 cursor-pointer">
                        <img src="https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial14.png" alt="superstore" className="size-16 bg-blend-color-burn mx-auto" />
                        <p className="font-poppins line-clamp-1 mt-3 text-center">Jomuna Farmecy</p>
                    </div>

                    <div className="bg-gray-300 shadow-xl rounded-xl p-3 cursor-pointer">
                        <img src="https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial14.png" alt="superstore" className="size-16 bg-blend-color-burn mx-auto" />
                        <p className="font-poppins line-clamp-1 mt-3 text-center">Jomuna Farmecy</p>
                    </div>

                    <div className="bg-gray-300 shadow-xl rounded-xl p-3 cursor-pointer">
                        <img src="https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial14.png" alt="superstore" className="size-16 bg-blend-color-burn mx-auto" />
                        <p className="font-poppins line-clamp-1 mt-3 text-center">Jomuna Farmecy</p>
                    </div>

                    <div className="bg-gray-300 shadow-xl rounded-xl p-3 cursor-pointer">
                        <img src="https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial14.png" alt="superstore" className="size-16 bg-blend-color-burn mx-auto" />
                        <p className="font-poppins line-clamp-1 mt-3 text-center">Jomuna Farmecy</p>
                    </div>

                    <div className="bg-gray-300 shadow-xl rounded-xl p-3 cursor-pointer">
                        <img src="https://www.rokomari.com/static/200/images/icons/home-popular-category/Serial14.png" alt="superstore" className="size-16 bg-blend-color-burn mx-auto" />
                        <p className="font-poppins line-clamp-1 mt-3 text-center">Jomuna Farmecy</p>
                    </div>
                </div>
            </section>

            <section about="recently sold products" className="mt-5">
                <div className="flex justify-between items-center">
                    <p className="font-poppins text-xl bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent font-bold">Best Recently sold book</p>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 mt-5">
                    <Recently_sold_product_item />
                    <Recently_sold_product_item />
                    <Recently_sold_product_item />
                    <Recently_sold_product_item />
                    <Recently_sold_product_item />
                </div>
            </section>

            <section about="subscribe and become" className="mt-5">
                <div className="p-5 bg-slate-300 rounded-lg">
                    <p className="font-poppins text-xl text-center">Subscribe and be a part of Rokomari and get exciting offers!</p>
                    <div className="flex items-center flex-col md:flex-row gap-3 mt-3">
                        <input type="text" placeholder="email" className="bg-transparent outline-none px-3 py-1 border border-black flex-[2] text-black" />
                        <button className="flex-1 px-5 py-1 hover:bg-orange-500 border border-orange-500">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;