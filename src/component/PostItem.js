import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const { remove, post } = props;
  const navigate = useNavigate();

  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {post.id}. {post.title}
          </strong>
          <div>{post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => remove(post)}>Удалить</MyButton>
          <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
            Открыть
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
