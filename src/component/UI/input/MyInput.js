import React from "react";
import classes from "./MyInput.module.css";

// const MyInput = React.forwardRef((props, ref) => (
//   <input ref={ref} className={classes.myInput} {...props} />
// ));
const MyInput = (props) => <input className={classes.myInput} {...props} />;
export default MyInput;
