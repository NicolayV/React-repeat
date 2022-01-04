import { useEffect, useState } from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";
import "./styles/App.css";
import MyModal from "./component/UI/myModal/MyModal";
import MyButton from "./component/UI/button/MyButton";
import { usePosts } from "./component/hooks/usePosts";
import PostServise from "./API/PostServise";
import Loader from "./component/UI/loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => fetchPosts(), []);

  async function fetchPosts() {
    setIsPostLoading(true);
    const posts = await PostServise.getAll();
    setPosts(posts);
    setIsPostLoading(false);
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

      {isPostLoading ? (
        <Loader
          style={{ marginTop: 50, display: "flex,", justifyContent: "center" }}
        />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов"
        />
      )}
    </div>
  );
}

export default App;
