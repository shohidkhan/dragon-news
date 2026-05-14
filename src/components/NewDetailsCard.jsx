import React from "react";
import { Link } from "react-router";

const NewDetailsCard = ({ newsDetails }) => {
  const { category_id, details, title, image_url } = newsDetails;

  console.log(newsDetails);

  return (
    <div className="border border-gray-300 p-5 rounded-lg">
      <div>
        <img
          src={image_url}
          alt=""
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>
      <h2 className="mt-5 font-bold text-2xl">{title}</h2>
      <p className="text-accent mt-5 text-justify">{details}</p>
      <Link
        className="btn btn-secondary border-none border-0 rounded-none mt-5"
        to={`/category/${category_id}`}
      >
        Go back to category
      </Link>
    </div>
  );
};

export default NewDetailsCard;
