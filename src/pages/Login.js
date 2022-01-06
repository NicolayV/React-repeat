import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../component/UI/button/MyButton";
import MyInput from "../component/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
  const navigate = useNavigate();

  const { setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    navigate("/posts");
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h2>Page to login</h2>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login..." />
        <MyInput type="password" placeholder="Enter password..." />
        <MyButton>Submit</MyButton>
      </form>
    </div>
  );
};

export default Login;
