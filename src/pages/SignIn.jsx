import Button from "../components/button/Button";
import TextField from "@mui/material/TextField";
import { slotProps } from "../constants/slotProps.constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormErrors from "../components/FormErrors";
import MoonLoader from "react-spinners/MoonLoader";
import toast from "react-hot-toast";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = (data) => {
        setIsLoading(true);
        setTimeout(() => {
            navigate("/profile", { state: data });
            toast.success("Login successful!");
            setIsLoading(false);
        }, 2000);
    };
    return (
        <section className="bg-accent h-screen px-4 py-6 font-rubik space-y-2 max-w-md mx-auto border border-primary">
            <h1 className="text-3xl w-3/5 font-medium">
                Signin to your PopX account
            </h1>
            <p className="text-dark opacity-60 w-4/5 mb-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <TextField
                    id="outlined-helperText"
                    label="Email Address"
                    slotProps={slotProps}
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Email address is not valid",
                        },
                    })}
                />
                {errors.email && <FormErrors text={errors.email.message} />}
                <TextField
                    id="outlined-helperText"
                    label="Password"
                    slotProps={slotProps}
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                />
                {errors.password && (
                    <FormErrors text={errors.password.message} />
                )}
                <Button
                    type="submit"
                    title={`Login`}
                    className={`bg-primary hover:bg-primary-dark transition-colors text-white`}
                    isLoading={isLoading}
                    isLoadingText="Logging in..."
                    spinner={
                        <MoonLoader
                            color="#ffffff"
                            size={20}
                            loading={true}
                            speedMultiplier={0.7}
                        />
                    }
                />
            </form>
        </section>
    );
};
export default SignIn;
