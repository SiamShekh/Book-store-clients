const order = <tr>
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
                <div className="font-bold">Cooking the time</div>
                <div className="text-sm opacity-50">by Los angel</div>
            </div>
        </div>
    </td>
    <td>
        85 TK.
    </td>
    <td>Siam Al </td>
    <th>
        <a href="/seller/order-details/labarg" className="btn btn-ghost btn-xs">details</a>
    </th>
</tr>;


const OrderManagement = () => {
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
                            <th>Book info</th>
                            <th>Price</th>
                            <th>Buyer Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {order}
                        {order}
                        {order}
                        {order}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderManagement;