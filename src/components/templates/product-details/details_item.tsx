
const Details_item = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-5 border border-black border-b-4 border-r-4">
                <div className="text-black">
                    <div className="flex gap-2 items-center">
                        <div className="size-10 rounded-full bg-gray-900"></div>
                        <div className="">
                            <p>by <strong>Omer Sanny,</strong> 29 May 2022</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quaerat vero quam ullam distinctio adipisci rerum ex dolor praesentium magni minima aperiam nulla optio repellendus culpa. Accusantium magni facere asperiores.</p>
                </div>
            </div>
        </div>
    );
};

export default Details_item;