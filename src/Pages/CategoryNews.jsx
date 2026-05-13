import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id === "0") {
      setCategoryNews(data);
      return;
    } else if (id === "1") {
      const filteredData = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filteredData);
      return;
    } else {
      const filteredData = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredData);
    }
  }, [data, id]);
  return <div>Category news - {categoryNews.length}</div>;
};

export default CategoryNews;
