import ImageGallery from "react-image-gallery";
import Best_seller_category_item from "../components/templates/home/best_seller_category_item";
import Recently_sold_product_item from "../components/templates/home/recently_sold_product_item";

const images = [
    {
        original: "https://ds.rokomari.store/rokomari110/banner/DESKTOPfd11bb44-7279-4bfc-900c-febbee8b4e94.webp",
    },
    {
        original: "https://ds.rokomari.store/rokomari110/banner/DESKTOP34ac65b5-fed6-4a13-9de3-345514356565.webp",
    },
];

const Home = () => {
    return (
        <div>
            <section about="product banner slide">
                <div className="rounded-2xl w-full max-h-96">
                    <ImageGallery
                        autoPlay
                        infinite
                        showBullets
                        showNav={false}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showThumbnails={false}
                        items={images} />
                </div>
            </section>

            <section about="Best Seller category" className="mt-5">
                <div className="flex justify-between items-center">
                    <p className="font-poppins text-xl">Best Seller Category</p>
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
                    <p className="font-poppins text-xl">Superstore</p>
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
                    <p className="font-poppins text-xl">Recently sold book</p>
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
                        <input type="text" placeholder="email" className="bg-transparent outline-none px-3 py-1 border border-black flex-[2] text-black"/>
                        <button className="flex-1 px-5 py-1 hover:bg-orange-500 border border-orange-500">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;