import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line
import { motion } from "framer-motion";
const Landing = () => {
    const navigate = useNavigate();
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="bg-accent h-screen px-4 py-6 space-y-2 flex flex-col justify-end font-rubik max-w-md mx-auto border border-primary"
        >
            <h1 className="text-3xl font-medium text-dark">Welcome to PopX</h1>
            <p className="text-dark opacity-60 w-4/5 mb-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="space-y-2">
                <Button
                    title={`Create Account`}
                    className={`bg-primary text-white hover:bg-primary-dark transition-colors`}
                    onClick={() => navigate("/register")}
                    type="button"
                />

                <Button
                    title={`Already Registered? Login`}
                    className={`bg-secondary text-dark hover:bg-secondary-dark transition-colors`}
                    onClick={() => navigate("/signin")}
                    type="button"
                />
            </div>
        </motion.section>
    );
};
export default Landing;
