import Profile from "./Profile"

function UserInfo() {
  return (
    <div className="px-[50px] lg:px-[120px] py-[50px]  w-screen min-h-screen  overscroll-x-none">
      <h1 className=" text-2xl font-medium">Account settings</h1>
      <div className="lg:max-h-screen grid grid-cols-5 mt-[2.5rem]">
        <div className="col-span-1 block">
          <ul className="text-gray-600 ">
            {/* Arreglar esto después */}
            <li className="hover:text-gray-900 hover:bg-gray-200 w-24 p-2 rounded-full cursor-pointer">My profile</li>
            <li className="p-2 cursor-pointer">Security</li>
            <li className="mt-4 text-red-600 w-32 p-2 rounded-full cursor-pointer hover:text-red-900 hover:bg-red-200">Delete Account</li>
          </ul>
        </div>
        <div className="block col-span-4">
          <Profile/>
        </div>
      </div>
    </div>
  )
}

export default UserInfo