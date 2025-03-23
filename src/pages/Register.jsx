import Button from "../components/button/Button";
import TextField from "@mui/material/TextField";
import { slotProps, radioProps } from "../constants/slotProps.constants";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormErrors from "../components/FormErrors";
import MoonLoader from "react-spinners/MoonLoader";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleFormSubmit = (data) => {
        setIsLoading(true);
        setTimeout(() => {
            navigate("/profile", { state: data });
            toast.success("Account created successfully!");
            setIsLoading(false);
        }, 2000);
    };
    return (
        <section className="bg-accent h-screen px-4 py-6 font-rubik space-y-2 max-w-md mx-auto border border-primary">
            <h1 className="text-3xl w-3/5 mb-8 font-medium">
                Create your PopX account
            </h1>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <TextField
                    id="outlined-helperText"
                    label="Full Name*"
                    slotProps={slotProps}
                    placeholder="John Doe"
                    type="text"
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                        },
                    })}
                />
                {errors.name && <FormErrors text={errors.name.message} />}
                <TextField
                    id="outlined-helperText"
                    label="Phone number*"
                    slotProps={slotProps}
                    placeholder="+1 (555) 123-4567"
                    type="tel"
                    {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                            value: /^\+?[1-9]\d{1,14}$/,
                            message: "Phone number is not valid",
                        },
                    })}
                />
                {errors.phone && <FormErrors text={errors.phone.message} />}
                <TextField
                    id="outlined-helperText"
                    label="Email address*"
                    slotProps={slotProps}
                    placeholder="johndoe@email.com"
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
                    label="Password*"
                    slotProps={slotProps}
                    placeholder="********"
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
                <TextField
                    id="outlined-helperText"
                    label="Company"
                    slotProps={slotProps}
                    placeholder="Company name"
                    type="text"
                />
                <div>
                    <label id="agency-label" className="text-dark">
                        Are you an Agency?
                        <span className="text-red-500">*</span>
                    </label>
                    <RadioGroup
                        aria-labelledby="agency-label"
                        defaultValue="yes"
                    >
                        <div>
                            <FormControlLabel
                                value="yes"
                                control={<Radio sx={radioProps} />}
                                label="Yes"
                                defaultChecked
                            />
                            <FormControlLabel
                                value="no"
                                control={<Radio sx={radioProps} />}
                                label="No"
                            />
                        </div>
                    </RadioGroup>
                </div>
                <Button
                    disabled={false}
                    type="submit"
                    title={`Create Account`}
                    className={`bg-primary hover:bg-primary-dark transition-colors text-white`}
                    isLoading={isLoading}
                    spinner={
                        <MoonLoader
                            color="#ffffff"
                            size={20}
                            loading={true}
                            speedMultiplier={0.7}
                        />
                    }
                    isLoadingText={`Creating Account...`}
                />
            </form>
        </section>
    );
};
export default Register;
