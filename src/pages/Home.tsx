import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import Best_seller_category_item from "../components/templates/home/best_seller_category_item";

const images = [
    {
        original: "https://ds.rokomari.store/rokomari110/banner/DESKTOPfd11bb44-7279-4bfc-900c-febbee8b4e94.webp",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://ds.rokomari.store/rokomari110/banner/DESKTOP34ac65b5-fed6-4a13-9de3-345514356565.webp",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
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
                    <p className="font-poppins text-xl">Best Seller</p>
                    <Link to={'/#'} className="border px-6 py-2 hover:bg-black hover:text-white border-black">Show All</Link>
                </div>

                <div className="grid grid-cols-5 gap-3 mt-5">
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

                <div className="grid grid-cols-5 gap-3 mt-5">
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
        </div>
    );
};

export default Home;