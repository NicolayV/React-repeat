import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// React JS фундаментальный курс от А до Я - 2:47:30
// пофиксить асинхронную пагинацию
// обернуть useMemo() цикл for для запросов на сервер
