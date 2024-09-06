
import { Box, Checkbox, Chip, Container, Divider, FormControlLabel, TextField, Typography } from "@mui/material";
import { FaApple, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../../App.css";
import { useForm } from "react-hook-form";
import SocaialLogin from "../../components/SocaialLogin/SocaialLogin";


const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const handleFormSubmit = (data) => {
        console.log("Sumit Form data is", data)
    }

    return (
        <div className="md:flex">
            <Container className="flex justify-center items-center min-h-screen">
                <Box
                    className="shadow-md bg-[#FAFAFA] border border-[#f5f5f5]  rounded-lg w-[500px] h-[619px]"

                >
                    <div className="flex flex-col text-center gap-[5px]">
                        <p className="text-2xl font-semibold text-[#000000]">Welcome To</p>
                        <h1 className="text-4xl font-bold">Furni<span className="text-[#4977EE]">Flex</span></h1>
                        <h3 className="mb-5">Signup for purchase your desire products</h3>
                    </div>

                    <div className="space-y-4">
                        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                            {/* First Name */}
                            <div className="flex w-[452px] h-[52px] gap-4">
                                <TextField
                                    className=" text-[14px] bg-[#FFFFFF]"
                                    label="First Name"
                                    variant="filled"
                                    size="small"
                                    {...register('firstName', { required: 'First Name is required' })}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName?.message}
                                />

                                {/* Last Name */}
                                <TextField
                                    className=" text-[14px] bg-[#FFFFFF]"
                                    label="Last Name"
                                    variant="filled"
                                    size="small"
                                    {...register('lastName', { required: 'Last Name is required' })}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName?.message}
                                />
                            </div>

                            {/* Email */}
                            <TextField
                                label="Email address"
                                type="email"
                                variant="filled"
                                size="small"
                                className="w-[452px] h-[52px] text-[14px] bg-[#FFFFFF]"

                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />

                            {/* Password */}
                            <TextField
                                label="Password"
                                type="password"
                                variant="filled"
                                size="small"
                                className="w-[452px] h-[52px] text-[14px] bg-[#FFFFFF]"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long',
                                    },
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                            <FormControlLabel required control={<Checkbox size="small" />} label="I agree to the Terms & Policy" />

                            {/* Submit Button */}
                            <button className="w-[452px] rounded-md h-[52px] bg-black text-white text-xl font-semibold">Signup</button>

                            <Divider className="w-[452px]">
                                <Chip label="or" size="small" />
                            </Divider>

                        </form>
                        {/* SocailLogin button components with Goole and Apple  */}
                        <SocaialLogin />

                        <Typography
                            align="center"
                            className="font-medium text-[14px]"
                        >
                            Have an account? <Link className="text-[#4977EE]" to={"/login"}>Sign In</Link>
                        </Typography>
                    </div>
                </Box>
            </Container>
            <Container className="flex bg-example justify-center items-center min-h-screen" >
                <div className="flex flex-col w-[445px] h-[181px] gap-2 text-center mx-auto">
                    <div className="mx-auto items-center">
                        <p style={{ fontFamily: "Lucida Calligraphy" }} className="flex justify-center p-2 w-[89px] h-[89px] bg-[#1E99F5] rounded-full items-center text-4xl font- font-semibold italic">F</p>
                    </div>
                    <h1 className="text-4xl font-bold text-[#FFFFFF]">Furni<span className="text-[#4977EE]">Flex</span></h1>
                    <p className="text-[#C8C4C4]">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
                </div>

            </Container>


        </div>

    );
};

export default SignUp;