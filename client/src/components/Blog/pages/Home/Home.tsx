import { useContext, useEffect } from "react";
import mainImg from "../../../../assets/main-img.jpg";
import Recent from "./Recent";
import ShowBlogs from "./ShowBlogs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
function Home() {
  const { setUser } = useContext(UserContext);

  const url = "http://localhost:3000/api/users/home";
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if(res.data.message !== 'Success!'){
          navigate("/login");
        }
        setUser(res.data.profile);
      })
      .catch((err) => console.error(err.message));
  }, []);
  
  return (
    <div className="px-[50px] lg:px-[120px] w-screen min-h-screen  overscroll-x-none">
      <section className="lg:max-h-screen py-[50px] ">
        <h1 className="text-3xl mb-4">
          {" "}
          <i>Best blog of the week...</i>
        </h1>
        <div className="grid lg:grid-cols-2 grid-rows-1 gap-4">
          <img
            className="rounded-lg lg:col-span-1 w-full"
            src={mainImg}
            alt="Un computador"
          />
          <div className="lg:col-span-1">
            <div className="grid lg:grid-rows-2 sm:grid-cols-2 w-full gap-4">
              <Recent
                buttonStyle="border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-sky-100 "
                bgColor="bg-blue-200"
              />
              <Recent
                buttonStyle="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-purple-100"
                bgColor="bg-purple-200"
              />
            </div>
          </div>
        </div>
      </section>
      <ShowBlogs />
    </div>
  );
}

export default Home;
