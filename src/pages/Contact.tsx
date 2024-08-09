import customer_care from "../assets/images/customer_care_men.webp";

const Contact = () => {
    return (
        <div className="flex justify-between items-center flex-col-reverse md:flex-row">
            <div className="flex-1">
                <form className="border-l border-black border-t border-b-4 border-r-4 p-5">
                    <p className="my-5 text-xl font-poppins font-semibold">Contact with teams</p>
                    <input placeholder="name" className="outline-none bg-transparent border border-black w-full px-5 py-2 rounded-xl font-poppins" />
                    <input placeholder="email" className="outline-none mt-5 bg-transparent border border-black w-full px-5 py-2 rounded-xl font-poppins" />
                    <button className="mt-5 bg-black text-white w-full px-5 py-2 rounded-xl font-poppins">Contact</button>
                </form>
            </div>
            <img src={customer_care} alt="customer care image" className="flex-1 h-96 " />
        </div>
    );
};

export default Contact;