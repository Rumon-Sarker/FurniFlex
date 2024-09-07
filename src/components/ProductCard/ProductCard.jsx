import { useContext } from "react";
import { TbShoppingBag } from "react-icons/tb";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ items }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="flex flex-col w-[277px] border border-[#F1F1F1] p-4 gap-8">
            <div className="flex items-center justify-center bg-[#F2F2F2] w-[245px] h-[236px] rounded-lg mx-auto">
                <img className="w-52 h-52" src={items.img} alt="" />
            </div>
            <div className="flex flex-col gap-4 w-[245px]">
                <h1 className="text-xl font-semibold text-[#343434]">{items.name}</h1>

                <div className="flex gap-3 justify-between items-center">
                    <p className="text-xl font-bold text-[#343434]">$ {items.price}</p>
                    <p className="text-xl font-medium text-[#ABABAB] line-through">$350.00</p>
                    <p className="text-xl font-semibold text-[#B92E2E]">30%OFF</p>
                </div>
                <h2 className="text-sm font-normal text-[#838383]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aut aliquid eaque blanditiis numquam non.</h2>
            </div>
            <button onClick={() => addToCart(items)} className="flex items-center justify-center gap-6 w-60 h-11 rounded bg-[#202020] text-[#ffffff] text-base font-semibold">
                <TbShoppingBag className="text-xl" />
                Add To cart
            </button>
        </div>
    );
};

export default ProductCard;