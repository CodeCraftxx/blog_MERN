import profileImg from "../../../assets/profile.jpg";

type Props = {
  author: string;
  date?: string;
}
function ProfilePublish({author, date}: Props) {
  return (
    <div className="flex gap-3 items-center text-sm text-gray-900">
      <img
        className="w-8 h-8 rounded-full object-cover cursor-pointer"
        src={profileImg}
        alt=""
      />
      <p>{author}</p>
      <span>|</span>
      <p>{date}</p>
    </div>
  );
}

export default ProfilePublish;
