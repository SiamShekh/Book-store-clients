import { useState } from "react";
import { Link } from "react-router-dom";

const Recently_sold_product_item = () => {
    const [onHover, setHover] = useState(false);
    return (
        <div className="bg-slate-300 shadow-xl rounded-xl relative h-64 w-full" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="absolute top-0 w-full rounded-t-xl h-40">
                <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Sobuj_Dhaka_Garden_Dahao_Cockroach_Kille-Sobuj_Dhaka_Garden_Shop-38565-418166.jpg" alt="products" className={`rounded-t-xl w-full h-40 absolute ${onHover && 'opacity-30'}`} />

                {
                    onHover &&
                    <Link className="bg-orange-500 px-3 py-1 rounded-lg absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-poppins text-xs" to={'/#'}>View more</Link>
                }
            </div>

            <div className="p-3 absolute bottom-0">
                <p className="text-xs line-clamp-3 font-poppins ">ami tomi ar k jani nah tomi ami ar k mani nah ami tomi ar k jani nah tomi ami ar k mani nah</p>
                <p className="font-bold font-poppins text-xl text-center">TK.130</p>
            </div>
        </div>
    );
};

export default Recently_sold_product_item;