import { useEffect, useState } from "react";
import { RandomCategory } from "../../services/category.service";
import CategoryComponent from "./components/Category.Component";

const RandomComponents = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    RandomCategory()
      .then((response) => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setCategory]);

  const renderCategories = () => {
    if (category.length) {
      return category.map((item, index) => {
        return <CategoryComponent category={item} key={index} />;
      });
    }
    return <h2>No categories</h2>;
  };

  return <div className="categories">{renderCategories()}</div>;
};

export default RandomComponents;
