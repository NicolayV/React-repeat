import React from "react";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/UI/navbar/Navbar";
import AppRouter from "./component/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
