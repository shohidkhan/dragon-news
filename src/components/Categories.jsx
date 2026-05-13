import React, { use } from "react";
import { Link, NavLink } from "react-router";

const categoriesPromises = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromises);
  return (
    <div>
      <h2 className="font-bold">All categories ({categories.length})</h2>
      <div className="mt-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="py-3 px-5 text-accent font-semibold hover:bg-gray-100 block rounded"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
