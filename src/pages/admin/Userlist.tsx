
const User = <tr>
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
                <div className="font-bold">Siam Sheikh</div>
                <div className="text-sm opacity-50">siam62349@gmail.com</div>
            </div>
        </div>
    </td>
    <td>78</td>
    <td>98</td>
    <th>
        <button className="btn btn-ghost btn-xs">details</button>
    </th>
</tr>;

const Userlist = () => {
    return (
        <div>
            {/* <p className="text-black font-poppins text-xl">Userlist</p> */}
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
                            <th>Carts</th>
                            <th>Order</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {User}
                        {User}
                        {User}
                        {User}
                        {User}

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

export default Userlist;