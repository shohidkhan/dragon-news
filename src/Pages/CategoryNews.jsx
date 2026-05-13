import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { BiShare } from "react-icons/bi";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
// import { BiShare } from "react-icons/bi";
import { Link, useLoaderData, useParams } from "react-router";

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
  return (
    <div>
      <h2 className="font-bold flex items-center gap-2">
        Total <div className="text-secondary">{categoryNews.length}</div> news
        found.
      </h2>
      {categoryNews.map((news) => (
        <div
          className="grid grid-cols-1 border my-10 border-gray-200  rounded"
          key={news._id}
        >
          <div className="flex justify-between items-center px-5 py-3 bg-base-200">
            <div className="flex gap-4 items-center">
              <div>
                <img
                  className="w-10 h-10 rounded-full"
                  src={news.author.img}
                  alt=""
                />
              </div>

              <div>
                <p className="font-semibold text-sm">{news.author.name}</p>
                <p className="text-xs text-accent">
                  {news.author.published_date.slice(0, 10)}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <div>
                <CiBookmark size={20} />
              </div>
              <div>
                <CiShare2 size={20} />
              </div>
            </div>
          </div>
          <div className="px-5 py-5">
            <h2 className="font-bold text-xl text-gray-600">{news.title}</h2>
            <div className="my-5">
              <img
                src={news.image_url}
                className="rounded w-full h-[262px] object-cover"
                alt="thumbnail"
              />
            </div>
            <p className="py-4 border-b border-gray-300 text-justify">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military
              <Link className="text-blue-500" to={`/news-details/${news.id}`}>
                ... Read More
              </Link>
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <FaStar fill="#FF8C47" />
                  <FaStar fill="#FF8C47" />
                  <FaStar fill="#FF8C47" />
                  <FaStar fill="#FF8C47" />
                  <FaStar fill="#FF8C47" />
                </div>
                <div>{news.rating.number}</div>
              </div>
              <div className="flex gap-2 items-center">
                <FaEye />
                <span>{news.total_view}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryNews;
