import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const { title, body } = props.post;
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.number}. {title}
          </strong>
          <div>{body}</div>
        </div>
        <div className="post__btns">
          <MyButton>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
