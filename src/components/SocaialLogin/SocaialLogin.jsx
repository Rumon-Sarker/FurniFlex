import React, { useContext } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocaialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handaleGoogleLogin = async () => {
        await googleLogin()
            .then((result) => {
                if (result.user.uid) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login Success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/products")
                }
            })
    }
    return (
        <>
            <div className="flex w-[452px] h-[52px] gap-[10px]">
                <button onClick={handaleGoogleLogin} className="text-sm w-full flex gap-2 items-center font-medium rounded-md p-4 bg-[#FAFAFA] border border-[#d6d2d2] "><FcGoogle className="text-2xl" /> Sign in with Google</button>
                <button className="text-sm w-full flex gap-2 items-center font-medium rounded-md p-4 bg-[#FAFAFA] border border-[#d6d2d2] "><FaApple className="text-2xl" /> Sign in with Apple</button>
            </div>

        </>
    );
};

export default SocaialLogin;