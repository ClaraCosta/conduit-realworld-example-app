import axios from "axios";
import { Link } from "react-router-dom";
import ArticleTags from "../components/ArticleTags";
import { useAuth } from "../helpers/AuthContextProvider";
import ArticleMeta from "./ArticleMeta";
import { FavButton } from "./Buttons";

function ArticlesPreview({ articlesData, loading, setArticlesData }) {
  const { articles } = articlesData || {};
  const { headerToken } = useAuth();

  const handleFav = ({ slug, favorited, index }) => {
    axios({
      url: `api/articles/${slug}/favorite`,
      method: favorited ? "delete" : "post",
      headers: headerToken,
    }).then((res) => {
      if (res.data.errors) return console.log(res.data.errors.body);
      const items = [...articles];

      items[index] = res.data.article;

      setArticlesData({ ...articlesData, articles: items });
    });
  };

  return loading ? (
    <div className="article-preview">Loading articles...</div>
  ) : articles?.length > 0 ? (
    articles.map((article, index) => {
      const { slug, title, description, tagList } = article;

      return (
        <div className="article-preview" key={slug}>
          <ArticleMeta article={article}>
            <FavButton
              article={article}
              handler={handleFav}
              index={index}
              compact
            />
          </ArticleMeta>

          <Link to={`/article/${slug}`} className="preview-link">
            <h1>{title}</h1>

            <p>{description}</p>

            <span>Read more...</span>

            <ArticleTags tagList={tagList} />
          </Link>
        </div>
      );
    })
  ) : (
    <div className="article-preview">No articles available.</div>
  );
}

export default ArticlesPreview;
