import { useEffect, useRef, useState } from "react";
import PostList from "../component/PostList";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import "../styles/App.css";
import MyModal from "../component/UI/myModal/MyModal";
import MyButton from "../component/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../component/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import Pagination from "../component/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../component/UI/select/MySelect";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => fetchPosts(limit, page), [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (p) => {
    setPage(p);
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

      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все" },
        ]}
      />

      {postError && <h1>Произошла ошибка: {postError}</h1>}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />

      <div ref={lastElement} style={{ height: 20, background: "red" }} />

      {isPostLoading && (
        <div
          style={{
            marginTop: 50,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
};

export default Posts;
