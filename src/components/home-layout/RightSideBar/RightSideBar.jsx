import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import SocialMedia from "../SocialMedia/SocialMedia";

const RightSideBar = () => {
  return (
    <div className="sticky top-0 pt-5">
      <SocialLogin></SocialLogin>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default RightSideBar;
