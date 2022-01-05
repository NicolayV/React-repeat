import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./component/AppRouter";
import Navbar from "./component/UI/navbar/Navbar";
import { AuthContext } from "./context/";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
