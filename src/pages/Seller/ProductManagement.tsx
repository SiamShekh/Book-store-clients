import Product_item from "../../components/templates/product-management/product_item";

const ProductManagement = () => {
    return (
        <div>
            <div className="flex-[2]">
                <div className="flex md:items-center justify-between border-b pb-5 md:flex-row flex-col">
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="checkbox outline-none" />
                        <p className="font-poppins capitalize text-black">select all (6 items)</p>
                    </div>
                </div>

                <div className="">
                    <Product_item />
                    <Product_item />
                    <Product_item />
                    <Product_item />
                    <Product_item />
                </div>

            </div>
        </div>
    );
};

export default ProductManagement;