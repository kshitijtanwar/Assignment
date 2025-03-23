import Button from "../components/button/Button";
import TextField from "@mui/material/TextField";
import { slotProps, radioProps } from "../constants/slotProps.constants";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-accent h-screen px-4 py-6 font-rubik space-y-2">
            <h1 className="text-3xl w-3/5 mb-8 font-medium">
                Create your PopX account
            </h1>
            <div className="flex flex-col gap-4">
                <TextField
                    id="outlined-helperText"
                    label="Full Name*"
                    slotProps={slotProps}
                    placeholder="John Doe"
                />
                <TextField
                    id="outlined-helperText"
                    label="Phone number*"
                    slotProps={slotProps}
                    placeholder="+1 (555) 123-4567"
                />
                <TextField
                    id="outlined-helperText"
                    label="Email address*"
                    slotProps={slotProps}
                    placeholder="johndoe@email.com"
                />
                <TextField
                    id="outlined-helperText"
                    label="Password*"
                    slotProps={slotProps}
                    placeholder="********"
                />
                <TextField
                    id="outlined-helperText"
                    label="Company"
                    slotProps={slotProps}
                    placeholder="Company name"
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
            </div>
            <Button
                disabled={false}
                type="button"
                title={`Create Account`}
                className={`bg-primary hover:bg-primary-dark transition-colors text-white`}
                onClick={() => navigate("/profile")}
            />
        </section>
    );
};
export default Register;
