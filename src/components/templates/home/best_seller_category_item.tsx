import { useState } from "react";
import { Link } from "react-router-dom";

const Best_seller_category_item = () => {
    const [onHover, setHover] = useState(false);
    return (
        <div className="p-[1px] bg-gradient-to-b from-transparent to-blue-800 rounded-lg">
            <div className="relative h-48 rounded-lg bg-white" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className="rounded-t-lg absolute top-0">
                    <img src="https://ds.rokomari.store/rokomari110/category/5aefd05f226f4_image.webp" alt="book" className={`w-full h-32 object-cover rounded-t-lg ${onHover && 'opacity-30'}`} />
                    {
                        onHover &&
                        <Link className={`bg-orange-500 px-4 py-1 absolute rounded-xl left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`} to={'/#'}>View</Link>
                    }
                </div>
                <div className="absolute bottom-0 p-2">
                    <p className="font-poppins">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
};

export default Best_seller_category_item;