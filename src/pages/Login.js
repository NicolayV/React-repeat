import MyButton from "../component/UI/button/MyButton";
import MyInput from "../component/UI/input/MyInput";

const Login = () => {
  return (
    <div>
      <h2>Page to login</h2>
      <form>
        <MyInput type="text" placeholder="Enter login..." />
        <MyInput type="password" placeholder="Enter password..." />
        <MyButton>Submit</MyButton>
      </form>
    </div>
  );
};

export default Login;
