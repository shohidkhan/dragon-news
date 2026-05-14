import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { setUser, googleSignIn, githubSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        setUser(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        // ...
      });
  };

  const handleGitHubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        // navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        // ...
      });
  };

  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div>
        <button
          onClick={handleGoogleSingIn}
          className="flex gap-2 items-center border cursor-pointer py-2 px-15 rounded border-blue-300 text-blue-500 mb-2 text-sm"
        >
          <GrGoogle size={16}></GrGoogle> <span>Login With Google</span>
        </button>
        <button
          onClick={handleGitHubSignIn}
          className="flex gap-2 items-center border cursor-pointer py-2 px-15 rounded  mb-2 text-sm"
        >
          <FaGithub size={16}></FaGithub> <span>Login With Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
