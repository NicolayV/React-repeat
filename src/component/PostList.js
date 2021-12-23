import PostItem from "./PostItem";

const PostList = (props) => {
  const { posts, title } = props;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem number={index + 1} key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
