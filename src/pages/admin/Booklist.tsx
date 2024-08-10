const Book = <tr>
    <th>
        <label>
            <input type="checkbox" className="checkbox" />
        </label>
    </th>
    <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                    <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div>
                <div className="font-bold line-clamp-1">PH from Programming Hero</div>
                <div className="text-sm opacity-50">Jhanker Mahmud</div>
            </div>
        </div>
    </td>
    <td>75 TK</td>
    <td>780</td>
    <td>Category</td>
    <th>
        <a href="/product-details/amitom" className="btn btn-ghost btn-xs">details</a>
        <button className="btn btn-ghost btn-xs">report</button>
    </th>
</tr>;

const Booklist = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Book}
                        {Book}
                        {Book}
                        {Book}
                        {Book}
                        {Book}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Booklist;