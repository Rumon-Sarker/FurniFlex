import { useContext, useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {


    const { cart = [], removeFromCart } = useContext(CartContext);


    const handaleCheckOut = () => {
        Swal.fire({
            title: " Coming Soooooooon............",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
    }

    const totaPrice = cart?.reduce((prev, item) => prev + item.price, 0);


    return (
        <div className="md:w-[1450px] mx-auto bg-gray-100">
            <h1 className="text-3xl font-semibold p-2">An overview of your order</h1>
            {/* if cartData > 0 then show this content otherwise hide this content  */}
            {
                cart?.length > 0 ?

                    <div className="w-full flex gap-4 justify-between pt-12 pb-32 ">

                        <div className=" w-full">

                            <table className="table">

                                <tbody>
                                    {cart?.map((item, index) => (
                                        <tr key={index}>
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item?.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>

                                            <th>
                                                <button onClick={() => removeFromCart(item?.id)} className=" text-2xl btn-xs"><FaDeleteLeft /></button>
                                            </th>
                                        </tr>

                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <div className="space-y-4 w-96 rounded bg-gray-50 p-4 mx-auto md:mx-0 font-bold">
                            <h1 className="text-2xl font-bold">Order Details</h1>

                            <h1 className="flex justify-between">TOTAL ITEMS: <span className="">{cart?.length}</span></h1>
                            <h1 className="flex justify-between">SUBTOTAL: <span className="">$ {0}</span></h1>
                            <h1 className="flex justify-between border-b">DISCOUNT: <span>$ 00</span></h1>
                            <p className="flex justify-between">TOTAL: <span>$ {totaPrice}</span> </p>
                            <button onClick={handaleCheckOut} className="btn w-full mt-3 hover:bg-black text-white hover:rotate-1   bg-black font-bold rounded border-red-100 border-b-4 ">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>


                    // if cartdata length null then show this contnet otherwise hide this content 
                    :
                    <div className="h-96 bg-slate-200 pt-5">
                        <p className="bg-gray-400 border-l-8 border-gray-500 text-white font-semibold mb-12 p-4"> Your Cart is currently empty</p>
                        <Link to={"/products"} className="border-2 btn p-2 ml-4 bg-red-100 rounded">Go to Shop Now</Link>
                    </div>
            }



        </div>
    );
};

export default Cart;