import { useContext } from "react";
import InfoInput from "./InfoInput";
import { UserContext } from "../../Context/UserContext";
import { BorderColorOutlined } from '@mui/icons-material';

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full">
      <h1 className="text-xl font-medium">My Profile</h1>
      <div className="flex justify-between mt-[2.5rem] items-center">
        <div className="flex gap-3 items-center">
          <div className="bg-gray-300 font-bold p-[2rem] rounded-full">{user.first.slice(0,1)}{user.last.slice(0,1)}</div>
          <div className="flex flex-col">
            <p>{user.first} {user.last}</p>
            {/* Cambiar esto según las necesidades después (tipo BIO) */}
            <p className="text-gray-600">FullStack Developer</p>
            <p className="text-gray-600">Colombia</p>
          </div>
        </div>
        <div>
          {/* Colocar ícono de editar */}
          <span className="cursor-pointer border border-gray-300 text-gray-700 px-5 py-1 rounded-full">
            Edit
            <BorderColorOutlined sx={{fontSize: '17px', marginLeft: '5px'}} />
          </span>
        </div>
      </div>
      <div className="mt-[3.5rem]">
        <div className="flex justify-between items-center  mb-5">
          <h1 className="text-lg font-medium">Personal Information</h1>
          <span className="cursor-pointer border border-gray-300 text-gray-700 px-5 py-1 rounded-full">
            Edit
            <BorderColorOutlined sx={{fontSize: '17px', marginLeft: '5px'}} />
          </span>
        </div>
        <div className="grid grid-cols-2 ">
          <InfoInput label="First Name" input={user.first} />
          <InfoInput label="Last Name" input={user.last} />
          <InfoInput label="Email Address" input={user.email} />
          <InfoInput label="Phone" input="+57 321 8628 540" />
          <InfoInput label="Bio" input="FullStack Developer" />
        </div>
      </div>
      
      
    </div>
  );
}

export default Profile;
