import Recently_sold_product_item from "../components/templates/home/recently_sold_product_item";

const Product = () => {
    return (
        <div>
            
            <header about="header of the product" className="flex items-center justify-between flex-col md:flex-row gap-5">
                <p className="font-poppins font-medium">301 Book Loaded</p>
                <form className="flex items-center gap-3 bg-gray-300 pl-5 pr-2 py-2 rounded-full">
                    <input type="text" placeholder="search..." className="font-poppins text-black placeholder:text-black bg-transparent outline-none" />
                    <button type="submit" className="border-t border-l border-r-4 border-b-4 hover:bg-black hover:text-white text-black border-black px-3 py-1 rounded-full">Search</button>
                </form>

                <select className="border border-black px-5 py-2 rounded-lg outline-none">
                    <option disabled selected>Category</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                </select>
            </header>

            <section about="section of products">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-2 mt-5">
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                    <Recently_sold_product_item/>
                </div>
            </section>
        </div>
    );
};

export default Product;