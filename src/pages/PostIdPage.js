import { useParams } from "react-router-dom";

const PostIdPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div style={{ color: "blue", marginTop: 50 }}>
      <h1>Вы перешли на страницу Post с ID = {params.id}</h1>
    </div>
  );
};

export default PostIdPage;
