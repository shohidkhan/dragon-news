import React, { use } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import SocialMedia from "../SocialMedia/SocialMedia";
import { AuthContext } from "../../../Provider/AuthProvider";

const RightSideBar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="sticky top-0 pt-5">
      {!user && (
        <>
          <SocialLogin></SocialLogin>
        </>
      )}
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default RightSideBar;
