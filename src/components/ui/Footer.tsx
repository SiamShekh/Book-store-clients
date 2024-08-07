import logo from "../../assets/icons/icon.png";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 max-w-5xl mx-auto text-black text-pretty">
                <aside>
                    <img src={logo} draggable={false} className="bg-blend-color-burn" />
                    <p>
                        Bs Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title font-teko">Category</h6>
                    <a className="link link-hover">Kids</a>
                    <a className="link link-hover">Adult</a>
                    <a className="link link-hover">Religions</a>
                    <a className="link link-hover">State</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-teko">Support</h6>
                    <a className="link link-hover">Customer Care</a>
                    <a className="link link-hover">Email</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-teko">Policy</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;