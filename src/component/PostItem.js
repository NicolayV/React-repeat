import React from "react";

const PostItem = (props) => {
  const { id, title, body } = props.post;
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
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
