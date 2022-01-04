import { useEffect, useState } from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";
import "./styles/App.css";
import MyModal from "./component/UI/myModal/MyModal";
import MyButton from "./component/UI/button/MyButton";
import { usePosts } from "./component/hooks/usePosts";
import axios from "axios";
import PostServise from "./API/PostServise";

// const initialState = [
//   { id: 1, title: "аа", body: "бб" },
//   { id: 2, title: "гг 2", body: "аа" },
//   { id: 3, title: "вв 3", body: "яя" },
// ];

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => fetchPosts(), []);

  async function fetchPosts() {
    const response = await PostServise.getAll();
    setPosts(response);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: 30, marginRight: 30 }}
        onClick={() => setModal(true)}
      >
        Создать пользователя
      </MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={fetchPosts}>
        fetch posts
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        Форма для создания поста
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />
    </div>
  );
}

export default App;
