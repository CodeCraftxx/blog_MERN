import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './Style.css';
import ProfilePublish from "./ProfilePublish";
import { useContext } from "react";
import { BlogContext } from "../Context/BlogContext";

type Props = {
  id: string;
  title: string;
  content: string;
  author: string;
  date?: string;
}
function Card({id,title, content, author, date}: Props) {
  const {readMore} = useContext(BlogContext);
  return (
    <div className="flex flex-col justify-between h-60 shadow p-4 border rounded-lg relative">
      <div>
        <h2 className="sm:text-2xl text-xl mb-2 truncate-title">{title}</h2>
        <p className="text-gray-700 text-sm truncate-text">
          {content}
        </p>
        <div className="absolute bottom-16 left-4 text-blue-600 hover:text-blue-700 ">
          <button className="mt-5 hover:me-1" onClick={() => readMore(id)}>Read More</button>
          <FontAwesomeIcon className="ms-2 hover:ms-3 cursor-pointer" icon={faArrowRight} />
        </div>
        
      </div>

      <ProfilePublish author={author} date={date}/>
    </div>
  );
}

export default Card;
