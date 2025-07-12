import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Discussions from "../pages/Discussions";
import Amour from "../pages/Amour";
import Resoudre from "../pages/Resoudre";
import Ado from "../pages/Ado";
import Trash from "../pages/Trash";

const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/amour" element={<Amour />} />
        <Route path="/resoudre" element={<Resoudre />} />
        <Route path="/ado" element={<Ado />} />
        <Route path="/trash" element={<Trash />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
);

export default AppRouter;
