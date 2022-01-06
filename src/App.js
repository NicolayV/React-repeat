import React, { useEffect, useState } from "react";

import { BrowserRouter, useNavigate } from "react-router-dom";
import AppRouter from "./component/AppRouter";
import Navbar from "./component/UI/navbar/Navbar";
import { AuthContext } from "./context/";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      setIsLoading(false);
      // navigate("/posts");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      {/* <BrowserRouter> */}
      <Navbar />
      <AppRouter />
      {/* </BrowserRouter> */}
    </AuthContext.Provider>
  );
}

export default App;
