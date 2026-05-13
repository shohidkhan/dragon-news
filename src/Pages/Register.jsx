import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            navigate(location?.state || "/");
            console.log(user);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                required
                placeholder="Type your name"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input"
                placeholder="Email"
              />
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photo"
                className="input"
                required
                placeholder="Enter your photo url"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                required
                className="input"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
            <p>
              Already have an account?{" "}
              <Link to="/auth/login" className="link text-secondary">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
