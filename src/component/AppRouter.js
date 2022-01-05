import { Route, Routes, Navigate } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default AppRouter;
