
const Footer = () => {
    return (
        <>
            <footer className="footer md:w-[1450px] mx-auto bg-black text-white p-10">
                <aside>
                    <div className="flex gap-2 mx-auto items-center cursor-pointer">
                        <p style={{ fontFamily: "Lucida Calligraphy" }} className="flex justify-center w-[38px] h-[38px] bg-[#1E99F5] rounded-full items-center text-xl font- font-semibold italic">F</p>
                        <h1 className="text-xl font-bold text-white">Furni<span className="text-[#1E99F5]">Flex</span></h1>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </>
    );
};

export default Footer;