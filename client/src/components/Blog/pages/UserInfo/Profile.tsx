import InfoInput from "./InfoInput";

function Profile() {
  return (
    <div className="w-full">
      <h1 className="text-xl font-medium">My Profile</h1>
      <div className="flex justify-between mt-[2.5rem] items-center">
        <div className="flex gap-3 items-center">
          <div className="bg-gray-300 font-bold p-[2rem] rounded-full">TB</div>
          <div className="flex flex-col">
            <p>Thiago Bustamante</p>
            {/* Cambiar esto según las necesidades después (tipo BIO) */}
            <p className="text-gray-600">FullStack Developer</p>
            <p className="text-gray-600">Colombia</p>
          </div>
        </div>
        <div>
          {/* Colocar ícono de editar */}
          <span className="cursor-pointer border border-gray-300 text-gray-700 px-5 py-1 rounded-full">
            Edit
          </span>
        </div>
      </div>
      <div className="mt-[3.5rem]">
        <div className="flex justify-between items-center  mb-5">
          <h1 className="text-lg font-medium">Personal Information</h1>
          <span className="cursor-pointer border border-gray-300 text-gray-700 px-5 py-1 rounded-full">
            Edit
          </span>
        </div>
        <div className="grid grid-cols-2 ">
          <InfoInput label="First Name" input="Thiago" />
          <InfoInput label="Last Name" input="Bustamante" />
          <InfoInput label="Email Address" input="Bmosquera0510@gmail.com" />
          <InfoInput label="Phone" input="+57 321 8628 540" />
          <InfoInput label="Bio" input="FullStack Developer" />
        </div>
      </div>
      
      
    </div>
  );
}

export default Profile;
