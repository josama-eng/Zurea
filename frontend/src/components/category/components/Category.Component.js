import { useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryComponent = (props) => {
  const { category } = props;
  useEffect(() => {}, [category]);

  return (
    <div className="categoryWrapper">
      <img
        src={`http://localhost:5050/public/image/${category.categoryImg}`}
        alt=""
      />
      <div className="content">
        <h2>{category.categoryName}</h2>
        <Link to={`category/${category._id}`} className="categoryBtn">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default CategoryComponent;
