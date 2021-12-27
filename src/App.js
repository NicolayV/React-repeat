import { useRef, useState } from "react";
import PostList from "./component/PostList";
import "./styles/App.css";
import PostForm from "./component/PostForm";

function App() {
  // const bodyInputRef = useRef();
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript2", body: "Description" },
    { id: 2, title: "JavaScript3", body: "Description" },
    { id: 3, title: "JavaScript4", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // console.log(title);
  // console.log(bodyInputRef.current.value);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="список постов" />
    </div>
  );
}

export default App;
