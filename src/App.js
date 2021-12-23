import { useRef, useState } from "react";
import MyButton from "./component/UI/button/MyButton";
import MyInput from "./component/UI/input/MyInput";
import PostList from "./component/PostList";
import "./styles/App.css";

function App() {
  // const bodyInputRef = useRef();
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript2", body: "Description" },
    { id: 2, title: "JavaScript3", body: "Description" },
    { id: 3, title: "JavaScript4", body: "Description" },
  ]);
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });

    // console.log(title);
    // console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
          // ref={bodyInputRef}
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
          // ref={bodyInputRef}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="список постов" />
    </div>
  );
}

export default App;
