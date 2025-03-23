import Button from "../components/button/Button";
import TextField from "@mui/material/TextField";
import { slotProps } from "../constants/slotProps.constants";
import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <section className="bg-accent h-screen px-4 py-6 font-rubik space-y-2">
            <h1 className="text-3xl w-3/5 font-medium">
                Signin to your PopX account
            </h1>
            <p className="text-dark opacity-60 w-4/5 mb-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <div className="flex flex-col gap-4">
                <TextField
                    id="outlined-helperText"
                    label="Email Address"
                    slotProps={slotProps}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="outlined-helperText"
                    label="Password"
                    slotProps={slotProps}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    disabled={!email || !password}
                    type="button"
                    title={`Login`}
                    className={`bg-primary hover:bg-primary-dark transition-colors text-white`}
                />
            </div>
        </section>
    );
};
export default SignIn;
