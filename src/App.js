import { useState } from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import "./styles/App.css";
import MySelect from "./component/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "аа", body: "бб" },
    { id: 2, title: "гг 2", body: "аа" },
    { id: 3, title: "вв 3", body: "яя" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="список постов" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Список постов пуст</h1>
      )}
    </div>
  );
}

export default App;
