import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import ProfilePublish from "./ProfilePublish";
import { useContext, useState } from "react";
import { BlogContext } from "../../../Context/BlogContext";
import { MoreVert } from '@mui/icons-material';

type Props = {
  id: string;
  title: string;
  content: string;
  author: string;
  date?: string;
};
function Card({ id, title, content, author, date }: Props) {
  const { readMore } = useContext(BlogContext);
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="flex flex-col justify-between h-60 shadow py-[1.2rem] px-[1.5rem] border rounded-lg relative">
      <div>
        <h2 className="sm:text-2xl text-xl mb-2 truncate-title">{title}</h2>
        <p className="text-gray-700 text-sm truncate-text">{content}</p>
        <div className="absolute bottom-16 left-4 text-blue-600 hover:text-blue-700 ">
          <button className="mt-5 hover:me-1" onClick={() => readMore(id)}>
            Read More
          </button>
          <FontAwesomeIcon
            className="ms-2 hover:ms-3 cursor-pointer"
            icon={faArrowRight}
          />
        </div>
      </div>
      <div>
        <MoreVert className="absolute top-6 right-1 text-gray-700 cursor-pointer" onClick={() => setIsClick(!isClick)}/>
        {
          isClick && <div className="absolute top-12 right-5 text-gray-700 cursor-pointer bg-gray-100 shadow rounded">
            <p className="hover:bg-gray-300 py-1 px-4 rounded-t">Edit</p>
            <p className="hover:bg-red-300 text-red-500 py-1 px-4 rounded-b ">Delete</p>
          </div>
        }
      </div>
      <ProfilePublish author={author} date={date} />
    </div>
  );
}

export default Card;
