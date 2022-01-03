import PostItem from "./PostItem";

const PostList = (props) => {
  const { remove, posts, title } = props;
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Список постов пуст</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
