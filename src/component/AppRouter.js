import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
// import Posts from "../pages/Posts";
// import About from "../pages/About";
// import Error from "../pages/Error";
// import PostIdPage from "../pages/PostIdPage";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isLoading, isAuth, setIsAuth } = useContext(AuthContext);

  console.log("isAuth", isAuth);
  console.log("isLoading", isLoading);

  if (isLoading) {
    console.log("Loader", isLoading);
    return <Loader />;
  }
  console.log("Loaderof", isLoading);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      {/* <Route path="/" element={<Navigate to="/posts" />} /> */}
      {/* <Route path="*" element={<Navigate to="/error" />} /> */}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;

//   <Route path="/posts" element={<Posts />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/error" element={<Error />} />
//       <Route path="/posts/:id" element={<PostIdPage />} />
//
