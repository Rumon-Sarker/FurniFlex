import { useContext } from "react";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { TbShoppingBag } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { cart = [] } = useContext(CartContext);
    const { user, logOut } = useContext(AuthContext);

    const handaleSignOut = async () => {
        const res = await logOut()
            .then(result => {
                if (result) {
                    navigate("/products")
                }
            })
            .catch(error => {
                console.log(error.message)
            })
        return res;
    }

    const navItem = <>
        <li><Link to={"/products"}>Home</Link></li>
        <li><Link to={"/products"}>Products</Link></li>
        <li><Link to={"/products"}>Categories</Link></li>
        <li><Link to={"/products"}>Custom</Link></li>
        <li><Link to={"/products"}>Blog</Link></li>

    </>
    return (
        <div className="navbar flex justify-between bg-[#ffffff] border-b border-[#F1F1F1] md:w-[1440px] md:h-[118px] mx-auto">

            {/* Mobile Device navbar */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#ffffff] text-[#202020] font-semibold text-xl p-6 rounded-box z-[1] mt-3 w-52 shadow">
                        {navItem}

                    </ul>
                </div>
                <div className="flex gap-2 mx-auto items-center cursor-pointer">
                    <p style={{ fontFamily: "Lucida Calligraphy" }} className="flex justify-center w-[38px] h-[38px] bg-[#1E99F5] rounded-full items-center text-xl font- font-semibold italic">F</p>
                    <h1 className="text-xl font-bold text-black">Furni<span className="text-[#1E99F5]">Flex</span></h1>
                </div>

            </div>

            {/* desktop navbar  */}

            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-[#202020] font-semibold text-xl menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>


            <div className="lg:navbar-end navbar-center gap-7">

                {/* shoping Cart  */}

                <Link to={"/carts"}>
                    <div className="flex items-center" >
                        <TbShoppingBag className="md:text-3xl lg:text-4xl text-3xl" />
                        <p className="flex absolute md:ml-6 ml-3 mt-6 justify-center text-white md:w-[16px] md:h-[16px] w-1 h-1 bg-[#141b20] rounded-full p-3 items-center">{cart?.length}</p>
                    </div>
                </Link>

                <div className="avatar cursor-pointer">
                    <div className="w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

                {
                    !user ? <Link className=" md:text-3xl text-2xl" to={"/login"}><GoSignIn /></Link> : <button onClick={handaleSignOut} className=" md:text-3xl text-2xl"><GoSignOut /></button>}
            </div>
        </div>
    );
};

export default Navbar;