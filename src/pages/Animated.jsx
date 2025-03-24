import { useLocation, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import SignIn from "./SignIn";
import Register from "./Register";
import Profile from "./Profile";
const Animated = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};
export default Animated;
