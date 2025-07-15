// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuestionPage from "../pages/QuestionPage";
import { questionPages } from "./questionPages";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {questionPages.map(({ path, data }) => (
      <Route key={path} path={path} element={<QuestionPage data={data} />} />
    ))}
  </Routes>
);

export default AppRouter;
