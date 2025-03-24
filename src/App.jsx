import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Animated from "./pages/Animated";
const App = () => {
    return (
        <Router>
            <Toaster />
            <Animated />
        </Router>
    );
};
export default App;
