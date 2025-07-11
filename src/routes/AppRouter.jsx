import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Discussions from "../pages/Discussions";

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discussions" element={<Discussions />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
);

export default AppRouter;
