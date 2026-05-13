import React, { Suspense } from "react";
import Categories from "../../Categories";

const LeftSideBar = () => {
  return (
    <div className="sticky top-0 pt-5">
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftSideBar;
