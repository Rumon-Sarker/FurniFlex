import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocaialLogin = () => {
    return (
        <>
            <div className="flex w-[452px] h-[52px] gap-[10px]">
                <button className="text-sm w-full flex gap-2 items-center font-medium rounded-md p-4 bg-[#FAFAFA] border border-[#d6d2d2] "><FcGoogle className="text-2xl" /> Sign in with Google</button>
                <button className="text-sm w-full flex gap-2 items-center font-medium rounded-md p-4 bg-[#FAFAFA] border border-[#d6d2d2] "><FaApple className="text-2xl" /> Sign in with Apple</button>
            </div>

        </>
    );
};

export default SocaialLogin;