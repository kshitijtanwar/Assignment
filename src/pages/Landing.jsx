import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import { fadeInFromAbove } from "../constants/framerMotion.constants";
import MetaData from "../utils/MetaData";
// eslint-disable-next-line
import { motion } from "framer-motion";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <>
            <MetaData />
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                className="bg-accent h-screen px-4 py-6 space-y-2 flex flex-col justify-end font-rubik max-w-md mx-auto border border-primary"
            >
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    variants={fadeInFromAbove}
                    className="text-3xl font-medium text-dark"
                >
                    Welcome to PopX
                </motion.h1>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    variants={fadeInFromAbove}
                    className="text-dark opacity-60 w-4/5 mb-8 text-lg"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </motion.p>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={fadeInFromAbove}
                    className="space-y-2"
                >
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
                </motion.div>
            </motion.section>
        </>
    );
};
export default Landing;
