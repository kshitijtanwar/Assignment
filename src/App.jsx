import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};
export default App;
