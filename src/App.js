import { useEffect, useState } from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";
import "./styles/App.css";
import MyModal from "./component/UI/myModal/MyModal";
import MyButton from "./component/UI/button/MyButton";
import { usePosts } from "./component/hooks/usePosts";
import PostServise from "./component/API/PostServise";
import Loader from "./component/UI/loader/Loader";
import { useFetching } from "./component/hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";
import Pagination from "./component/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  let pageArray = getPagesArray(totalPages);

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostServise.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => fetchPosts(limit, page), []);

  console.log(pageArray, page);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (p) => {
    setPage(p);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: 30, marginRight: 30 }}
        onClick={() => setModal(true)}
      >
        Создать пост
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
      {postError && <h1>Произошла ошибка: {postError}</h1>}
      {isPostLoading ? (
        <div
          style={{
            marginTop: 50,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
