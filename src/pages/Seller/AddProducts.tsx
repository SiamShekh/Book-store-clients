const AddProducts = () => {
    return (
        <div>
            <form action="">
                <div className="flex justify-between items-center gap-3 mb-5 flex-col md:flex-row">
                    <input type="text" className="w-full flex-1 outline-none bg-transparent px-5 py-1 border border-black border-b-4 border-r-4 text-black" placeholder="name..." />
                    <input type="number" className="w-full flex-1 outline-none bg-transparent px-5 py-1 border border-black border-b-4 border-r-4 text-black" placeholder="price..." />
                    <select className="w-full flex-1 outline-none bg-transparent px-5 py-1 border border-black border-b-4 border-r-4 text-black">
                        <option disabled selected>Pick the category</option>
                        <option>Kids</option>
                        <option>Adults</option>
                        <option>Young</option>
                    </select>
                </div>

                <div className="flex justify-between items-center gap-3 flex-col md:flex-row">
                    <input type="file" className="w-full file-input file-input-ghost flex-1 outline-none bg-transparent px-5 py-1 border border-black border-b-4 border-r-4 text-black" />
                </div>

                <textarea className="w-full file-input file-input-ghost flex-1 mt-5 outline-none bg-transparent px-5 py-1 border border-black border-b-4 border-r-4 text-black h-40" placeholder="description"/>
                <button className="mt-5 hover:bg-black hover:text-white outline-none bg-transparent px-5 py-1 border border-black border-b-4 border-r-4 text-black">Check Preview</button>
            </form>

            {/* Add prebiew here: """                                                                " */}
        </div>
    );
};

export default AddProducts;