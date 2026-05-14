import React, { Suspense, useEffect, useState } from "react";
import Header from "../components/Header";
import RightSideBar from "../components/home-layout/RightSideBar/RightSideBar";
import NewDetailsCard from "../components/NewDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState({});
  useEffect(() => {
    const singleNewsDetail = data.find((news) => news.id === id);
    setNewsDetails(singleNewsDetail);
  }, [id, data]);
  // console.log(newsDetails);
  return (
    <div className="min-h-screen my-10">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-10">
        <div className="col-span-9">
          <Suspense fallback={<span>Loading...</span>}>
            <NewDetailsCard newsDetails={newsDetails}></NewDetailsCard>
          </Suspense>
        </div>
        <div className="col-span-3">
          <RightSideBar></RightSideBar>
        </div>
      </main>
    </div>
  );
};

export default NewDetails;
