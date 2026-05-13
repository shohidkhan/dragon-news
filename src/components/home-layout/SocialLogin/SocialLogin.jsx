import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div>
        <button className="flex gap-2 items-center border py-2 px-18 rounded border-blue-300 text-blue-500 mb-2 text-sm">
          <GrGoogle size={16}></GrGoogle> <span>Login With Google</span>
        </button>
        <button className="flex gap-2 items-center border py-2 px-18 rounded  mb-2 text-sm">
          <FaGithub size={16}></FaGithub> <span>Login With Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
