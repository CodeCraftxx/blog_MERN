import { useContext, useState } from "react";
import Profile from "./Profile"
import UserBlogs from "./UserBlogs";
import { UserContext } from "../../Context/UserContext";

function UserInfo() {
  const liStyle = "hover:text-gray-900 hover:bg-gray-200 w-24 p-2 rounded-full cursor-pointer";
  const [selectedContainer, setSelectedContainer] = useState(1);
  const { user, handleUserBlogs } = useContext(UserContext);

  const handleBlogs = () => {
    handleUserBlogs(user.email)
    console.log(handleUserBlogs(user.email));
    setSelectedContainer(2);
  }

  return (
    <div className="px-[50px] lg:px-[120px] py-[50px]  w-screen min-h-screen  overscroll-x-none">
      <h1 className=" text-2xl font-medium">Account settings</h1>
      <div className="lg:max-h-screen grid grid-cols-5 mt-[2.5rem]">
        <div className="col-span-1 block">
          <ul className="text-gray-600 ">
            {/* Arreglar esto después */}
            <li className={liStyle} onClick={() => setSelectedContainer(1)}>My profile</li>
            <li className={liStyle} onClick={handleBlogs}>My Blogs</li>
            {/* <li className={liStyle} onClick={() => setSelectedContainer(3)}>Security</li>  */}
            <li className="mt-4 text-red-600 w-32 p-2 rounded-full cursor-pointer hover:text-red-900 hover:bg-red-200">Delete Account</li>
          </ul>
        </div>
        <div className="block col-span-4">
          {selectedContainer === 1 && <Profile/>}
          {selectedContainer === 2 && <UserBlogs/>}
          {/* {selectedContainer === 3 && <Profile/>} */}
        </div>
      </div>
    </div>
  )
}

export default UserInfo