import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserStyle.css";
import bgCC from "../../../../assets/blog_cc.png";
import axios from "axios";
function Register() {
  const inputStyle =
    "w-full bg-transparent border-b border-white outline-none px-2 py-2 mb-2 rounded-sm";
  const labelStyle = "block text-sm text-gray-500";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:3000/api/users/register";
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(url, {
        firstName,
        lastName,
        email,
        password,
      })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="bodySpecial">
      <section className="md:w-5/6 h-11/12 sm:w-5/4 w-3/4 flex  mx-auto my-[2rem] shadow rounded-lg border bg-white">
        <div className="md:block hidden w-1/2 items-center m-auto">
          <img
            className="m-auto drop-shadow-lg hover:drop-shadow-2xl transition ease-in "
            src={bgCC}
            alt="Blog CodeCraft"
          />
        </div>
        <div className="md:w-1/2 w-full h-full bg-black text-white lg:p-[6rem] py-[7rem] p-[3rem] md:rounded-s-lg rounded-lg">
          <h1 className="text-4xl mb-[3.5rem] font-semibold text-center">
            Sign up!
          </h1>
          <form onSubmit={handleRegister}>
            <div className="flex gap-3 mb-4">
              <div>
                <label className={labelStyle} htmlFor="first-name">
                  Firstname
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  value={firstName}
                  name="first-name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className={labelStyle} htmlFor="last-name">
                  Lastname
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  value={lastName}
                  name="last-name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className={labelStyle} htmlFor="user-email">
                Email
              </label>
              <input
                className={inputStyle}
                type="email"
                value={email}
                name="user-email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              {" "}
              <label className={labelStyle} htmlFor="user-pass">
                Password
              </label>
              <input
                className={inputStyle}
                type="password"
                value={password}
                name="user-pass"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="special px-[30px] py-[10px] mt-[4rem] mb-[1rem] block m-auto"
              type="submit"
            >
              <span>Sign up</span>
            </button>
          </form>
          <p className="md:text-base text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link className="text-slate-200 underline" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Register;
