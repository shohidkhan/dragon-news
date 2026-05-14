import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import RightSideBar from "../components/home-layout/RightSideBar/RightSideBar";
import LeftSideBar from "../components/home-layout/LeftSideBar/LeftSideBar";

const HomeLayout = () => {
  const data = useLoaderData();
  return (
    <div>
      <header>
        <Header className=""></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews data={data}></LatestNews>
        </section>
        <section className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 mt-10 gap-10">
        <aside className="col-span-3 relative">
          <LeftSideBar></LeftSideBar>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 relative">
          <RightSideBar></RightSideBar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
